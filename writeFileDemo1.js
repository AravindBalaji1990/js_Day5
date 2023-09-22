// we need to use the fs -> file system
const fs = require('fs')
// below is the item that we are going to write to the file
let fInput = "This is a example for writing into a file example"
fs.writeFile('sampletext1.txt', fInput, (err) => {
   if (err) throw err;
   else{
      console.log("The file is updated with the given data")
   }
})