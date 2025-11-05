# from flask import Flask, request, jsonify
# import pickle, gzip, numpy as np, pandas as pd
# import os
# from flask_cors import CORS  # ✅ Add this

# app = Flask(__name__)
# CORS(app)  # ✅ Enable CORS for all routes

# # Load Data
# popular_df = pickle.load(open('popular.pkl', 'rb'))
# pt = pickle.load(open('pt.pkl', 'rb'))
# books = pickle.load(gzip.open('book.pkl.gz', 'rb'))
# similarity_scores = pickle.load(open('similarity.pkl', 'rb'))


# def convert_to_python_types(df):
#     result = []
#     for i in range(len(df)):
#         item = {
#             'Book-Title': str(df.iloc[i]['Book-Title']),
#             'Book-Author': str(df.iloc[i]['Book-Author']),
#             'Image-URL-M': str(df.iloc[i]['Image-URL-M']),
#             'Num-Ratings': int(df.iloc[i]['Num-Ratings']),
#             'Avg-Ratings': float(df.iloc[i]['Avg-Ratings']),
#             'Genres': str(df.iloc[i].get('Genres', 'Fiction'))
#         }
#         result.append(item)
#     return result


# @app.route('/')
# def index():
#     return jsonify(convert_to_python_types(popular_df))


# @app.route('/recommend_books', methods=['POST'])
# def recommend():
#     user_input = request.json.get('user_input')

#     try:
#         index = np.where(pt.index == user_input)[0][0]
#         similar_items = sorted(list(enumerate(similarity_scores[index])),
#                                key=lambda x: x[1],
#                                reverse=True)[1:6]

#         recommended_books = []

#         for i in similar_items:
#             book_name = pt.index[i[0]]
#             temp_df = books[books['Book-Title'].str.lower().str.strip() == book_name.lower().strip()].drop_duplicates('Book-Title')

#             title = temp_df['Book-Title'].iloc[0]
#             author = temp_df['Book-Author'].iloc[0]
#             img = temp_df['Image-URL-M'].iloc[0]

#             pop = popular_df[popular_df['Book-Title'].str.lower().str.strip() == title.lower().strip()]

#             if len(pop) > 0:
#                 num_ratings = int(pop['Num-Ratings'].values[0])
#                 avg_ratings = float(pop['Avg-Ratings'].values[0])
#             else:
#                 num_ratings = 0
#                 avg_ratings = 0.0

#             recommended_books.append({
#                 "Book-Title": title,
#                 "Book-Author": author,
#                 "Image-URL-M": img,
#                 "Num-Ratings": num_ratings,
#                 "Avg-Ratings": avg_ratings
#             })

#         return jsonify(recommended_books)

#     except:
#         return jsonify({"error": "Book not found"}), 404


# if __name__ == "__main__":
#     port = int(os.environ.get("PORT", 5001))
#     app.run(host="0.0.0.0", port=port)


from flask import Flask, request, jsonify
from flask_cors import CORS  # ✅ Add this
import pickle, gzip, numpy as np, pandas as pd
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) # ✅ Enable CORS for all routes

# Load Data
popular_df = pickle.load(open('popular.pkl', 'rb'))
pt = pickle.load(open('pt.pkl', 'rb'))
books = pickle.load(gzip.open('book.pkl.gz', 'rb'))
similarity_scores = pickle.load(open('similarity.pkl', 'rb'))

def convert_to_python_types(df):
    result = []
    for i in range(len(df)):
        item = {
            'Book-Title': str(df.iloc[i]['Book-Title']),
            'Book-Author': str(df.iloc[i]['Book-Author']),
            'Image-URL-M': str(df.iloc[i]['Image-URL-M']),
            'Num-Ratings': int(df.iloc[i]['Num-Ratings']),
            'Avg-Ratings': float(df.iloc[i]['Avg-Ratings']),
            'Genres': str(df.iloc[i].get('Genres', 'Fiction'))
        }
        result.append(item)
    return result

@app.route('/')
def top_books():
    return jsonify(convert_to_python_types(popular_df))

@app.route('/recommend_books', methods=['POST'])
def recommend():
    user_input = request.json.get('user_input')
    try:
        index = np.where(pt.index == user_input)[0][0]
        similar_items = sorted(list(enumerate(similarity_scores[index])),
                               key=lambda x: x[1], reverse=True)[1:6]

        recommended_books = []
        for i in similar_items:
            book_name = pt.index[i[0]]
            temp_df = books[books['Book-Title'].str.lower().str.strip() == book_name.lower().strip()].drop_duplicates('Book-Title')

            title = temp_df['Book-Title'].iloc[0]
            author = temp_df['Book-Author'].iloc[0]
            img = temp_df['Image-URL-M'].iloc[0]

            pop = popular_df[popular_df['Book-Title'].str.lower().str.strip() == title.lower().strip()]
            num_ratings = int(pop['Num-Ratings'].values[0]) if len(pop) > 0 else 0
            avg_ratings = float(pop['Avg-Ratings'].values[0]) if len(pop) > 0 else 0.0

            recommended_books.append({
                "Book-Title": title,
                "Book-Author": author,
                "Image-URL-M": img,
                "Num-Ratings": num_ratings,
                "Avg-Ratings": avg_ratings
            })

        return jsonify(recommended_books)

    except:
        return jsonify({"error": "Book not found"}), 404

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
