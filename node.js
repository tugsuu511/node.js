// const fs = require("fs");

// function findWordAfterBanana(filePath) {
//   fs.readFile(filePath, "utf8", (err, data) => {
//     let word = "";
//     let prevWord = "";
//     let foundBanana = false;

//     for (let i = 0; i < data.length; i++) {
//       const char = data[i];
//       if (char === " " || char === "\n" || char === "\t") {
//         if (prevWord.toLowerCase() === "banana" && word.length > 0) {
//           console.log(`"banana" next word: ${word}`);
//           foundBanana = true;
//           break;
//         }
//         prevWord = word;
//         word = "";
//       } else {
//         word += char;
//       }
//     }
//   });
// }

// findWordAfterBanana("task1.txt");

// // 2.
// // fs.readdir('')

// function listFilesInDirectory() {
//   fs.readdir(".", (err, files) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     files.forEach((file) => {
//       console.log(file);
//     });
//   });
// }
// listFilesInDirectory();

// // 3.Merge files

// function mergeFiles(file1, file2, mergedFile) {
//   fs.readFile(file1, "utf8", (err, data1) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     fs.readFile(file2, "utf8", (err, data2) => {
//       if (err) {
//         console.error(err);
//         return;
//       }

//       const mergedData = data1 + "\n" + data2;

//       fs.writeFile(mergedFile, mergedData, (err) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         console.log(`Merged content into ${mergedFile}`);
//       });
//     });
//   });
// }
// mergeFiles("task1.txt", "file2.txt", "merged.txt");

// // 4.
// // fs.rm('')

// function deleteFile(filePath) {
//   fs.unlink(filePath, (err) => {
//     if (err) {
//       console.error(`Error deleting file ${filePath}:`, err);
//     } else {
//       console.log(`Successfully deleted: ${filePath}`);
//     }
//   });
// }

// deleteFile("example.txt");


// import chalk from 'chalk';

// console.log(chalk.red('Error'));
// console.log(chalk.green('Succesfull'));




// import figlet from 'figlet';

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });






// import ora from 'ora';

// const spinner = ora('Loading unicorns').start();

// setTimeout(() => {
// 	spinner.color = 'yellow';
// 	spinner.text = 'Loading rainbows';
// }, 1000);







// import pokemon from 'pokemon';

// pokemon.all('en');
// // => ['Bulbasaur', …]

// pokemon.random();
// //=> 'Snorlax'

// pokemon.getName(147);
// //=> 'Dratini'

// pokemon.getId('Dratini');
// //=> 147





// import { faker } from '@faker-js/faker';

// export function createRandomUser() {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), 
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }

// export const users = faker.helpers.multiple(createRandomUser, {
//   count: 5,
// }); console.log(createRandomUser());






// import inquirer from 'inquirer';

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });




// import cowsay from 'cowsay';

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));
// import { say } from 'cowsay';

// console.log(say({ text: 'grazing in the browser' }));






// var player = require('play-sound')(opts = {})

// // $ mplayer foo.mp3 
// player.play('foo.mp3', function(err){
//   if (err) throw err
// })

// // { timeout: 300 } will be passed to child process
// player.play('foo.mp3', { timeout: 300 }, function(err){
//   if (err) throw err
// })

// // configure arguments for executable if any
// player.play('foo.mp3', { afplay: ['-v', 1 ] /* lower volume for afplay on OSX */ }, function(err){
//   if (err) throw err
// })

// // access the node child_process in case you need to kill it on demand
// var audio = player.play('foo.mp3', function(err){
//   if (err && !err.killed) throw err
// })
// audio.kill()


import { generate, count } from "random-words";

console.log(generate());
//output: 'army'

console.log(generate(5));
//output: ['army', 'beautiful', 'became', 'if', 'actually']

console.log(generate({ minLength: 2 }));
//output: 'hello'

console.log(generate({ maxLength: 6 }));
//output: 'blue'

console.log(generate({ minLength: 5, maxLength: 5 }));
//output : 'world'

console.log(generate({ minLength: 11, maxLength: 10000 })); //maxLength limited to the longest possible word
//output: 'environment'

console.log(generate({ minLength: 10000, maxLength: 5 })); //minLength limited to the maxLength
//output: 'short'

console.log(generate({ min: 3, max: 10 }));
//output: ['became', 'arrow', 'article', 'therefore']

console.log(generate({ exactly: 2 }));
//output: ['beside', 'between']

console.log(generate({ min: 2, max: 3, seed: "my-seed" }));
//output: ['plenty', 'pure']

// this call will yield exactly the same results as the last since the same `seed` was used and the other inputs are identical
console.log(generate({ min: 2, max: 3, seed: "my-seed" }));
//output: ['plenty', 'pure']

console.log(generate({ exactly: 5, join: " " }));
//output: 'army beautiful became if exactly'

console.log(generate({ exactly: 5, join: "" }));
//output: 'armybeautifulbecameifexactly'

console.log(generate({ exactly: 2, minLength: 4 }));
//output: ['atom', 'window']

console.log(generate({ exactly: 5, maxLength: 4 }));
//output: ['army', 'come', 'eye', 'five', 'fur']

console.log(generate({ exactly: 2, minLength: 3, maxLength: 3 }));
//output: ['you, 'are']

console.log(generate({ exactly: 3, minLength: 5, maxLength: 100000 }));
//output: ['understanding', 'should', 'yourself']

console.log(generate({ exactly: 5, wordsPerString: 2 }));
//output: [ 'salt practical', 'also brief', 'country muscle', 'neighborhood beyond', 'grew pig' ]

console.log(generate({ exactly: 5, wordsPerString: 2, separator: "-" }));
//output: [ 'equator-variety', 'salt-usually', 'importance-becoming', 'stream-several', 'goes-fight' ]

console.log(
  generate({
    exactly: 5,
    wordsPerString: 2,
    formatter: (word) => word.toUpperCase(),
  })
);
//output: [ 'HAVING LOAD', 'LOST PINE', 'GAME SLOPE', 'SECRET GIANT', 'INDEED LOCATION' ]

console.log(
  generate({
    exactly: 5,
    wordsPerString: 2,
    formatter: (word, index) => {
      return index === 0
        ? word.slice(0, 1).toUpperCase().concat(word.slice(1))
        : word;
    },
  })
);
//output: [ 'Until smoke', 'Year strength', 'Pay knew', 'Fallen must', 'Chief arrow' ]

console.log(count());
//output: 1952

console.log(count({ minLength: 5 }));
//output: 1318 

console.log(count({ maxLength: 7 }));
//output: 1649

console.log(count({ minLength: 5, maxLength: 7 }));
//output: 1015


