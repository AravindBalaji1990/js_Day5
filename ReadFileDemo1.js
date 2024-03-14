// the below code is how we use the file system module
// imports the file system module to the current files
const filesystemobj = require('fs')
//fs is going to derive your readFile/writeFile operation

filesystemobj.readFile('/Users/aravindbalaji/Documents/Javascript/JS_Day5/js_Day5/tp.txt','UTF-8', (err, datastore) => {
   if (err) throw err;
   // store the content from the file to a var
   var datastoredfromfile = datastore.toString();
      console.log(typeof datastoredfromfile) // writin gthe content ot the console
      console.log(datastoredfromfile.match(/([a-zA-Z]+)([0-9]+)([a-z]+)([\$\^\.]+)([0-9]+)([a-z]+)/)); // vlaidation whether the content is string
      console.log(datastoredfromfile.replace('file', 'files')) // replacing if a word is availabel to another
})