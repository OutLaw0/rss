const fileSystem = require("fs");
const path = require('path');
//let data = "Sample text";

const writeStream = fileSystem.createWriteStream(path.join(__dirname, '../02-write-file') + "/output.txt");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
if (process.platform === "win32") {
  
    rl.on("SIGINT", function () {

      process.emit("SIGINT");
    });
  }
    
  process.on("SIGINT", function () {
    process.stdout.write("entry is over Ctrl+C");
    process.exit();
  });

const recursiveReadLine = function () {
    rl.question('', function (answer) {
    if (answer == 'exit') {
        process.stdout.write("entry is over EXIT");
        return rl.close();
    }

    writeStream.write(answer + '\n', "UTF8"); //перезапись
   
    recursiveReadLine(); //Calling this function again to ask new question

    });
  };
  console.log("Let's type something >>");
  recursiveReadLine(); 

  
/*const answer = rl.question(
    'What do you think of Node.js? '
  );*/

//writeStream.end();


/*

удаление файла
 fs.unlink('newTestFile.txt', (err) => {
        if(err) throw err;
        console.log('File deleted successfully!');
    });

*/

writeStream.on("error", (error) => {
	console.log(error.stack);
});
