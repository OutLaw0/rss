const fs = require('fs');
const fs_prom = fs.promises;
const path = require('path');

const src = path.join(__dirname, '../06-build-page');
const dest = path.join(__dirname, '../06-build-page') + '/project-dist';

/* ASSETS */
async function createDistDir(dest) {
try {
    await fs_prom.access(dest)
    createData(src, '/styles/')
    createHTML(src, '/components/')
}

catch (error) {
    if (error.code === 'ENOENT'){
        await fs_prom.mkdir(dest)
        createData(src, '/styles/')
        createHTML(src, '/components/')
    }
    
}

}

function copyFolder(src, dest, folder) {
    src += folder;
    dest += folder;
    
    createDir(src, dest)

async function createDir(src, dest) { //create assets
    try {
        await fs_prom.access(dest)
        async function deleteFiles(dest){
            const fileNames = await fs_prom.readdir(dest, {  withFileTypes: true})
              
                for (const filename of fileNames) { 
                    const destPath = path.join(dest, filename.name);
                  
                    if (filename.isDirectory()) {
                      await deleteFiles(destPath)
                    } else {
                       await fs_prom.unlink(path.join(dest, filename.name));
                    }
                }
        
                 }

                await deleteFiles(dest)

                 copyDir(src, dest)
    }
     catch (error) {
        if (error.code === 'ENOENT'){
            copyDir(src, dest)
        }

 
}
}

function copyDir(src, dest) { //copy assets
    fs.mkdir(dest, {
        recursive: true
    }, (error) => {
        if (error) throw error;
    }); //Create dir in case not found

    fs.readdir(src, {
        withFileTypes: true
    }, (error, fileNames) => {
        if (error) throw error;

        fileNames.forEach(filename => {
            const srcPath = path.join(src, filename.name);
            const destPath = path.join(dest, filename.name);
            if (filename.isDirectory()) {
                copyDir(srcPath, destPath, (error) => {
                    if (error) throw error;
                });
            } else {
                fs.copyFile(srcPath, destPath, (error) => {
                    if (error) throw error;
                });
            }
        })
    })

}

console.log('copy assets successful!')
}
/* ASSETS END */

/*  STYLES   */



async function createData(src, folder) { //copy files
    
    let data = '';
    const writeStream = fs.createWriteStream(dest + "/style.css");
    src += folder
   const fileNames = await fs_prom.readdir(src)
    for (const filename of fileNames) {
    if (path.parse(src+filename).ext == '.css'){

        const readStream = await fs_prom.readFile(src + filename, 'utf8');

        data += readStream;
    
        //readStream.end()
    }
            
 }

   writeInBundle(data)
   
       function writeInBundle(data) { //write style.css
    //const writeStream = fs.createWriteStream(dest + "/style.css");
        writeStream.write(data, "UTF8"); //перезапись
    
        writeStream.end()
    
        
        console.log('style.css created!')
      };
  // console.log(data);
  
}

/*  STYLES END  */

/*  HTML  */

async function createHTML(src, folder) { //copy files
    const writeHtmlStream = fs.createWriteStream(dest + "/index.html");
   let template = await fs_prom.readFile(src + '/template.html', 'utf8');
   const fileNames = await fs_prom.readdir(src+folder)
    for (const filename of fileNames) {
    if (path.parse(src+folder+filename).ext == '.html'){
       let fName =  path.parse(src+folder+filename).name;
        const readStream = await fs_prom.readFile(src + folder + filename, 'utf8');
        const regex = new RegExp(`{{${fName}}}`);
        template = template.replace(regex, readStream)
        //readStream.end()
    }
          
 }

 writeTemplate(template)
   
   function writeTemplate(template) { //write style.css
    //const writeStream = fs.createWriteStream(dest + "/style.css");
    writeHtmlStream.write(template, "UTF8"); //перезапись
    
    writeHtmlStream.end()
    
        
        console.log('index.html created!')
      };
  // console.log(data);
  
}
/*  HTML END  */

createDistDir(dest)

copyFolder(src, dest, '/assets/')


