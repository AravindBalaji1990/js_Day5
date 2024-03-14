const fs = require('fs')
const path = require('path')
// below is the item that we are going to write to the file
let fInput = "This is a example for writing into a file example this is me i added more cypress appednign it"
const workingdirectory = process.cwd();
console.log("my working directory ---> " , workingdirectory)
fs.appendFile('./sample2.txt', fInput, (err) => {
   if (err) throw err;
   else{
      console.log("The file is updated with the given data")
   }
})