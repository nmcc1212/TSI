// create a new text file or open it if it exists

const fs = require('fs');

const fileName = 'newFile.txt';
const content = 'This is a new file';

fs.open(fileName, 'w', (err, file) => {
    fs.appendFile(fileName, content, (err) => {
        if (err) throw err;
        console.log('Saved!');
    }
    );
}
);

// Json file handling
const jsFileName = 'newJsonFile.json';
const jsContent = '{"name":"John", "age":30, "city":"New York"}';

fs.open(jsFileName, 'w', (err, file) => {
    fs.appendFile(jsFileName, jsContent, (err) => {
        if (err) throw err;
        console.log('Saved!');
    }
    );
}
);

//
const existingJsFile = 'vscode.json';
fs.readFile(existingJsFile, (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
    console.log(JSON.stringify(obj, null, 2));
});
