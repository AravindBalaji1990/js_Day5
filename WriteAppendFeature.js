const fs = require('fs')
const path = require('path')
// below is the item that we are going to write to the file
let fInput = "Hi I have appended it"
const workingdirectory = process.cwd();
console.log("my working directory ---> " , workingdirectory)
if(fs.existsSync("sample2.txt")){
    fs.appendFile('./sample2.txt', fInput, (err) => {
        if (err) throw err;
        else{
           console.log("The file is updated with the given data by appending")
        }
     })
}else{
    fs.writeFile('./sample2.txt', fInput, (err) => {
        if (err) throw err;
        else{
           console.log("The file is updated with the given data by creating a new one")
        }
     })
}