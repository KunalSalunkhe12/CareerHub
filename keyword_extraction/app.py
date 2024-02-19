# from keybert import KeyBERT

# text =  "Selected intern's day-to-day responsibilities include: . Collaborate with our creative team to design visually stunning graphics and layouts for our online and print publications using Adobe Photoshop, Adobe Illustrator, and Canva2. Bring ideas to life through motion graphics and video editing using Adobe After Effects, Adobe Premiere Pro, and Final Cut Pro3. Enhance and retouch product images using Adobe Photoshop Lightroom CC, ensuring our brand aesthetic is consistent and compelling4. Assist in creating engaging social media content, including custom graphics and animations, to captivate our audience and increase brand awareness5. Work closely with our marketing team to develop eye-catching visuals for email campaigns, website banners, and promotional materials using Figma and Adobe Creative Suite6. Assist in designing layouts for our quarterly magazine, ensuring a seamless and visually appealing reading experience utilizing Adobe InDesign and CorelDRAW7. Keep up-to-date with industry trends and design best practices to continuously improve the quality and impact of our visual assets"
# kw_model = KeyBERT()
# keywords = kw_model.extract_keywords(doc, keyphrase_ngram_range=(1, 1), stop_words='english', top_n=10)

# print(keywords)

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
        doc = data.get('doc', '')  # Get the document text from the request
        if doc:
            keywords = kw_model.extract_keywords(doc, keyphrase_ngram_range=(1, 1), stop_words='english', top_n=10)
            return jsonify({'keywords': keywords})
        else:
            return jsonify({'error': 'Document text not found in request'}), 400
    else:
        return jsonify({'error': 'Only POST requests are supported'}), 405

if __name__ == '__main__':
    app.run(debug=True)
