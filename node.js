const fs = require("fs");

function findWordAfterBanana(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    let word = "";
    let prevWord = "";
    let foundBanana = false;

    for (let i = 0; i < data.length; i++) {
      const char = data[i];
      if (char === " " || char === "\n" || char === "\t") {
        if (prevWord.toLowerCase() === "banana" && word.length > 0) {
          console.log(`"banana" next word: ${word}`);
          foundBanana = true;
          break;
        }
        prevWord = word;
        word = "";
      } else {
        word += char;
      }
    }
  });
}

findWordAfterBanana("task1.txt");

// 2.
// fs.readdir('')

function listFilesInDirectory() {
  fs.readdir(".", (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach((file) => {
      console.log(file);
    });
  });
}
listFilesInDirectory();

// 3.Merge files

function mergeFiles(file1, file2, mergedFile) {
  fs.readFile(file1, "utf8", (err, data1) => {
    if (err) {
      console.error(err);
      return;
    }

    fs.readFile(file2, "utf8", (err, data2) => {
      if (err) {
        console.error(err);
        return;
      }

      const mergedData = data1 + "\n" + data2;

      fs.writeFile(mergedFile, mergedData, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Merged content into ${mergedFile}`);
      });
    });
  });
}
mergeFiles("file1.txt", "file2.txt", "merged.txt");

// 4.
// fs.rm('')

// Function to delete a file
function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file ${filePath}:`, err);
    } else {
      console.log(`Successfully deleted: ${filePath}`);
    }
  });
}

// Example usage
deleteFile("example.txt");
