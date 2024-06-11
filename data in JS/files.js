const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("app.sqlite", sqlite3.OPEN_READWRITE, (err) => {
  if (db) {
    console.log("Connected to the database.");
  } else {
    console.log("Failed to connect to the database.");
  }
});

const fs = require("fs");
const outputFile = "output.txt"; // Change the filename as needed

db.serialize(() => {
  db.each(
    `SELECT name as name,
                    website as website
             FROM applications`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      const sqlOutput = row.name + "\t" + row.website;
      console.log(sqlOutput);
      // write result into text file
      fs.appendFile(outputFile, sqlOutput + "\n", (err) => {
        if (err) {
          console.error(err.message);
        }
      });
    },
  );
});

// close the database connection

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
