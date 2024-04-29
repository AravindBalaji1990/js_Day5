// we need to use the fs -> file system
const fs = require('fs')
// below is the item that we are going to write to the file
let fInput = "This is a example for writing into a file example this is me i added more cypress data"
// workingdirectory is a user defined name and can be any 
// cwd will provide the path of current working directpry and it is a part of nodejs process 
// const workingdirectory = process.cwd();
// console.log("my working directory ---> " , workingdirectory)
fs.writeFile('./sample2.txt', fInput, (err) => {
   if (err) throw err;
   else{
      console.log("The file is updated with the given data")
   }
})