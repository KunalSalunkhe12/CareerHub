import torch
from transformers import AutoTokenizer, AutoModelForTokenClassification

# Given text
text = "Natural language processing (NLP) is a subfield of linguistics, computer science, and artificial intelligence concerned with the interactions between computers and human language, in particular how to program computers to process and analyze large amounts of natural language data."

# Load tokenizer and model
tokenizer = AutoTokenizer.from_pretrained("yanekyuk/bert-keyword-extractor")
model = AutoModelForTokenClassification.from_pretrained("yanekyuk/bert-keyword-extractor")

# Tokenize text
tokens = tokenizer(text, return_tensors='pt')

# Pass tokens through the model
with torch.no_grad():
    outputs = model(**tokens)

# Get predicted labels
predicted_labels = torch.argmax(outputs.logits, dim=2)

# Extract keywords based on the labels
keywords = [token for i, token in enumerate(tokens.tokens()[0]) if predicted_labels[0][i] != tokenizer.pad_token_id]

# Convert tokens back to words
keywords = tokenizer.convert_tokens_to_string(keywords)

print("Extracted Keywords:", keywords)
