const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// MongoDB connection settings

// Define the Mongoose schema and model
const dataSchema = new mongoose.Schema({}, { strict: false });
const DataModel = mongoose.model('DataModel', dataSchema);

// Function to import JSON file into MongoDB collection
async function importJsonToMongoDB(filePath, collectionName) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Connect to MongoDB using Mongoose
  await mongoose.connect("mongodb://100.125.70.69:27017/newsDB", {
    authSource: "admin",
    user: "root",
    pass: "password",
});

  try {
    // Create or get the collection (model)
    const collectionModel = mongoose.model(collectionName, dataSchema);

    // Insert data into the collection
    await collectionModel.create(data);

    console.log(`Imported ${filePath} into collection ${collectionName}`);
  } finally {
    // Close Mongoose connection
    await mongoose.connection.close();
  }
}

// Function to import all JSON files in a folder
function importJsonFiles(folderPath) {
  fs.readdirSync(folderPath).forEach((filename) => {
    if (filename.endsWith('.json')) {
      const filePath = path.join(folderPath, filename);
      const collectionName = path.parse(filename).name;
      importJsonToMongoDB(filePath, collectionName);
    }
  });
}

// Specify the folder containing JSON files
const jsonFolderPath = 'path/to/json/files';

// Connect to MongoDB using Mongoose
await mongoose.connect("mongodb://100.125.70.69:27017/todo-list", {
  authSource: "admin",
  user: "root",
  pass: "password",
});
  .then(() => {
    // Call the function to import JSON files into MongoDB collections
    importJsonFiles(jsonFolderPath);
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));
