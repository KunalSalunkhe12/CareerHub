# Use a pipeline as a high-level helper
from transformers import pipeline

pipe = pipeline("token-classification", model="yanekyuk/bert-keyword-extractor")

# Given text
text = "Selected intern's day-to-day responsibilities include: . Collaborate with our creative team to design visually stunning graphics and layouts for our online and print publications using Adobe Photoshop, Adobe Illustrator, and Canva2. Bring ideas to life through motion graphics and video editing using Adobe After Effects, Adobe Premiere Pro, and Final Cut Pro3. Enhance and retouch product images using Adobe Photoshop Lightroom CC, ensuring our brand aesthetic is consistent and compelling4. Assist in creating engaging social media content, including custom graphics and animations, to captivate our audience and increase brand awareness5. Work closely with our marketing team to develop eye-catching visuals for email campaigns, website banners, and promotional materials using Figma and Adobe Creative Suite6. Assist in designing layouts for our quarterly magazine, ensuring a seamless and visually appealing reading experience utilizing Adobe InDesign and CorelDRAW7. Keep up-to-date with industry trends and design best practices to continuously improve the quality and impact of our visual assets"

# Extract keywords
keywords = pipe(text)

complete_keywords = []
current_word = ''
for keyword in keywords:
    if keyword['word'].startswith('##'):
        current_word += keyword['word'][2:]  # Remove '##' prefix
    else:
        if current_word:
            complete_keywords.append(current_word)
            current_word = ''
        complete_keywords.append(keyword['word'])

# Add the last word if it exists
if current_word:
    complete_keywords.append(current_word)

print("Extracted Keywords:", complete_keywords)

