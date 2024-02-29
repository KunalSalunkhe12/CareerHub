class KeyBERT:
    def __init__(self, model="all-MiniLM-L6-v2", llm: BaseLLM = None):
        self.model = select_backend(model)

        if isinstance(llm, BaseLLM):
            self.llm = KeyLLM(llm)
        else:
            self.llm = llm

    def extract_keywords(
        self,
        docs: Union[str, List[str]],
        candidates: List[str] = None,
        keyphrase_ngram_range: Tuple[int, int] = (1, 1),
        stop_words: Union[str, List[str]] = "english",
        top_n: int = 5,
        min_df: int = 1,
        use_maxsum: bool = False,
        use_mmr: bool = False,
        diversity: float = 0.5,
        nr_candidates: int = 20,
        vectorizer: CountVectorizer = None,
        highlight: bool = False,
        seed_keywords: Union[List[str], List[List[str]]] = None,
        doc_embeddings: np.array = None,
        word_embeddings: np.array = None,
        threshold: float = None
    ) -> Union[List[Tuple[str, float]], List[List[Tuple[str, float]]]]:
        # Check for a single, empty document
        if isinstance(docs, str):
            if docs:
                docs = [docs]
            else:
                return []

        # Extract potential words using a vectorizer / tokenizer
        if vectorizer:
            count = vectorizer.fit(docs)
        else:
            try:
                count = CountVectorizer(
                    ngram_range=keyphrase_ngram_range,
                    stop_words=stop_words,
                    min_df=min_df,
                    vocabulary=candidates,
                ).fit(docs)
            except ValueError:
                return []

        # Scikit-Learn Deprecation: get_feature_names is deprecated in 1.0
        # and will be removed in 1.2. Please use get_feature_names_out instead.
        if version.parse(sklearn_version) >= version.parse("1.0.0"):
            words = count.get_feature_names_out()
        else:
            words = count.get_feature_names()
        df = count.transform(docs)

        # Check if the right number of word embeddings are generated compared with the vectorizer
        if word_embeddings is not None:
            if word_embeddings.shape[0] != len(words):
                raise ValueError("Make sure that the `word_embeddings` are generated from the function "
                                 "`.extract_embeddings`. \nMoreover, the `candidates`, `keyphrase_ngram_range`,"
                                 "`stop_words`, and `min_df` parameters need to have the same values in both "
                                 "`.extract_embeddings` and `.extract_keywords`.")

        # Extract embeddings
        if doc_embeddings is None:
            doc_embeddings = self.model.embed(docs)
        if word_embeddings is None:
            word_embeddings = self.model.embed(words)

        # Guided KeyBERT either local (keywords shared among documents) or global (keywords per document)
        if seed_keywords is not None:
            if isinstance(seed_keywords[0], str):
                seed_embeddings = self.model.embed(seed_keywords).mean(axis=0, keepdims=True)    
            elif len(docs) != len(seed_keywords):
                raise ValueError("The length of docs must match the length of seed_keywords")
            else:
                seed_embeddings = np.vstack([
                    self.model.embed(keywords).mean(axis=0, keepdims=True)
                    for keywords in seed_keywords
                ])
            doc_embeddings = ((doc_embeddings * 3 + seed_embeddings) / 4)

        # Find keywords
        all_keywords = []
        for index, _ in enumerate(docs):

            try:
                # Select embeddings
                candidate_indices = df[index].nonzero()[1]
                candidates = [words[index] for index in candidate_indices]
                candidate_embeddings = word_embeddings[candidate_indices]
                doc_embedding = doc_embeddings[index].reshape(1, -1)

                # Maximal Marginal Relevance (MMR)
                if use_mmr:
                    keywords = mmr(
                        doc_embedding,
                        candidate_embeddings,
                        candidates,
                        top_n,
                        diversity,
                    )

                # Max Sum Distance
                elif use_maxsum:
                    keywords = max_sum_distance(
                        doc_embedding,
                        candidate_embeddings,
                        candidates,
                        top_n,
                        nr_candidates,
                    )

                # Cosine-based keyword extraction
                else:
                    distances = cosine_similarity(doc_embedding, candidate_embeddings)
                    keywords = [
                        (candidates[index], round(float(distances[0][index]), 4))
                        for index in distances.argsort()[0][-top_n:]
                    ][::-1]

                all_keywords.append(keywords)

            # Capturing empty keywords
            except ValueError:
                all_keywords.append([])

        # Highlight keywords in the document
        if len(all_keywords) == 1:
            if highlight:
                highlight_document(docs[0], all_keywords[0], count)
            all_keywords = all_keywords[0]

        # Fine-tune keywords using an LLM
        if self.llm is not None:
            if isinstance(all_keywords[0], tuple):
                candidate_keywords = [[keyword[0] for keyword in all_keywords]]
            else:
                candidate_keywords = [[keyword[0] for keyword in keywords] for keywords in all_keywords]
            keywords = self.llm.extract_keywords(
                docs, 
                embeddings=doc_embeddings,
                candidate_keywords=candidate_keywords, 
                threshold=threshold
            )
            return keywords
        return all_keywords

    def extract_embeddings(
        self,
        docs: Union[str, List[str]],
        candidates: List[str] = None,
        keyphrase_ngram_range: Tuple[int, int] = (1, 1),
        stop_words: Union[str, List[str]] = "english",
        min_df: int = 1,
        vectorizer: CountVectorizer = None
    ) -> Union[List[Tuple[str, float]], List[List[Tuple[str, float]]]]:
        # Check for a single, empty document
        if isinstance(docs, str):
            if docs:
                docs = [docs]
            else:
                return []

        # Extract potential words using a vectorizer / tokenizer
        if vectorizer:
            count = vectorizer.fit(docs)
        else:
            try:
                count = CountVectorizer(
                    ngram_range=keyphrase_ngram_range,
                    stop_words=stop_words,
                    min_df=min_df,
                    vocabulary=candidates,
                ).fit(docs)
            except ValueError:
                return []

        # Scikit-Learn Deprecation: get_feature_names is deprecated in 1.0
        # and will be removed in 1.2. Please use get_feature_names_out instead.
        if version.parse(sklearn_version) >= version.parse("1.0.0"):
            words = count.get_feature_names_out()
        else:
            words = count.get_feature_names()

        doc_embeddings = self.model.embed(docs)
        word_embeddings = self.model.embed(words)

        return doc_embeddings, word_embeddings