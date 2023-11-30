// create a new text file or open it if it exists

const fs = require('fs');

const fileName = 'newFile.txt';
const content = 'This is a new file';


try {
    fs.writeFileSync(fileName, content);
    console.log('Saved Text!');
}
catch (err) {
    console.error(err);
}

// Json file handling
const jsFileName = 'newJsonFile.json';
const jsContent = '{"name":"John", "age":30, "city":"New York"}';

try {
    fs.writeFileSync(jsFileName, jsContent);
    console.log('Saved JSON!');
    const data = fs.readFileSync(jsFileName, 'utf8');
    console.log(data);
}
catch (err) {
    console.error(err);
}

// Read a json file
const existingJsFile = 'vscode.json';

try {
    const data = fs.readFileSync(existingJsFile, 'utf8');
    const obj = JSON.parse(data);
    console.log(JSON.stringify(obj, null, 2));
}
catch (err) {
    console.error(err);
}