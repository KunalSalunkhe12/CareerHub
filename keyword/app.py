from flask import Flask, request, jsonify
from keybert import KeyBERT

app = Flask(__name__)
kw_model = KeyBERT()

@app.route('/')
def index():
    return 'Keyword Extraction API'

@app.route('/extract_keywords', methods=['POST'])
def extract_keywords():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        doc = data.get('doc', '')  # Get the document text from the request
        if doc:
            keywords = kw_model.extract_keywords(doc, keyphrase_ngram_range=(1, 1), stop_words='english', top_n=20)
            return jsonify({'keywords': keywords})
        else:
            return jsonify({'error': 'Document text not found in request'}), 400
    else:
        return jsonify({'error': 'Only POST requests are supported'}), 405

if __name__ == '__main__':
    app.run(debug=True)
