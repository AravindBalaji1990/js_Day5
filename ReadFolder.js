//read a folder and identify the files available
var fs = require('fs');
// var files = fs.readdirSync('/Users/aravindbalaji/Documents/Javascript/Day5');
// console.log(files)

//read through folder
//readdirSync - this is a keyword in javascript
// it reads the folder and extracts the foldername from the respective folder
fs.readdirSync("/Users/aravindbalaji/Documents/Javascript").forEach((name) =>{
    // name.startsWith('E')
    // if(name.startsWith('Ex'))
    console.log(name)
})