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
