// the below code is how we use the file system module
const fs = require('fs')
//fs is going to derive your readFile/writeFile operation
fs.readFile('/Users/aravindbalaji/Documents/Javascript/Day5/tp.txt', (err, inputD) => {
   if (err) throw err;
   // store the content from the file to a var
   var datastoredfromfile = inputD.toString();
      // console.log(datastoredfromfile.match(/([a-zA-Z]+)/));
      console.log(datastoredfromfile.replace('file', 'files'))
})