
const path = require('path');

const fs = require('fs')

folderPath = path.join(__dirname, '../03-files-in-folder') + '/secret-folder';
console.log('file list: ')
function readFiles(dir, processFile) {
    // read directory
    fs.readdir(dir, (error, fileNames) => {
      if (error) throw error;
  
      fileNames.forEach(filename => {
        // get current file name
        const name = path.parse(filename).name;
        // get current file extension
        const ext = path.parse(filename).ext;
        // get current file path
        const filepath = path.resolve(dir, filename);
  
        // get information about the file
        fs.stat(filepath, function(error, stat) {
          if (error) throw error;
  
          // check if the current path is a file or a folder
          const isFile = stat.isFile();
  
          // exclude folders
          if (isFile) {
            // callback, do something with the file
            processFile(filepath, name, ext, stat);
          }
        });
      });
    });
  }

  // use an absolute path to the folder where files are located
readFiles(folderPath, (filepath, name, ext, stat) => {
   // console.log('file:', filepath);

 console.log(name + ' - ' + ext.slice(1) + ' - ' + (stat.size*0.0009766).toFixed(3) + 'kb');

  });

  


//path.extname(file)

/*const isFile = fileName => {
  return fs.stat(fileName).isFile()
}
console.log(isFile);
const fileList = fs.readdir(folderPath).map(fileName => {
  return path.join(folderPath, fileName)}).filter(isFile)
*/

//console.log(data);

