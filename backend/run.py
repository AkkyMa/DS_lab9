from flask_pymongo import PyMongo
from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__,
            static_folder="chat-front/public",
            template_folder="chat-front/src")
app.config["MONGO_URI"] = "mongodb://localhost:27017/test?replicaSet=rs0"
mongo = PyMongo(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/get_comments', methods=['GET'])
def get_comments():
    cursor = mongo.db.comments.find().sort('_id', -1).limit(10);
    comments = tuple(({'author': com['author'], 'text': com['text']} for com in cursor))
    return {'comments': comments}


@app.route('/api/post_comment', methods=['POST'])
def post_comment():
    comment = request.json
    mongo.db.comments.insert(comment)
    comment.pop('_id')
    return comment, 201

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
