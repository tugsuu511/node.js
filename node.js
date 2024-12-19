const fs = require('fs');

function findWordAfterBanana(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {

        let word = '';
        let prevWord = '';
        let foundBanana = false;

        for (let i = 0; i < data.length; i++) {
            const char = data[i];
            if (char === ' ' || char === '\n' || char === '\t') {
                if (prevWord.toLowerCase() === 'banana' && word.length > 0) {
                    console.log(`"banana" next word: ${word}`);
                    foundBanana = true;
                    break;
                }
                prevWord = word;  
                word = '';  
            } else {
                word += char;
            }
        }
    });
}

findWordAfterBanana('task1.txt');
