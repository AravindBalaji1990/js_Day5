//read a folder and identify the files available
var fs = require('fs');
// var files = fs.readdirSync('/Users/aravindbalaji/Documents/Javascript/Day5');
// console.log(files)

//read through folder
fs.readdirSync("/Users/aravindbalaji/Documents/Javascript").forEach((name) =>{
    // name.startsWith('E')
    // if(name.startsWith('Ex'))
    console.log(name)
})