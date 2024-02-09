import os
import json
from pymongo import MongoClient

# Establish a connection to the MongoDB.
client = MongoClient('mongodb://root:password@100.125.70.69:27017/?authSource=admin')

# Choose your database.
db = client['newsDB']

# Specify the directory you are using (replace 'your_directory' with your directory).
directory = 'intro to react/newData'

# Go through each JSON file in the directory.
for filename in os.listdir(directory):
    print (filename)
    if filename.endswith('.json'):
        collection_name = "news" # Get the filename without the extension.
        collection = db[collection_name]  # Use the filename as the collection name.

        # Open the JSON file and read the data.
        with open(os.path.join(directory, filename), 'r') as f:
            file_data = json.load(f)
        print (collection_name)
        # If the JSON file is a list of documents.
        if isinstance(file_data, list):
            collection.insert_many(file_data)
        else:  # The JSON file is one document.
            collection.insert_one(file_data)
