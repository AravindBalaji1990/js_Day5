const { error } = require('console');
const fs = require('fs')
// below is the item that we are going to write to the file
let fInput = "Hi I have appended it"
const workingdirectory = process.cwd();
console.log("my working directory ---> " , workingdirectory)
// it wil chekc for the file/folder is available inthe path

if(!fs.existsSync("sample2.txt")){
   throw new ReferenceError('file not found')
}else{
   //appendfile - keywpord in javascript where its going to append the text to the file
    fs.appendFile('./sample2.txt', fInput, (err) => {
        if (err) throw err;
        else{
           console.log("The file is updated with the given data by appending")
        }
     })
}