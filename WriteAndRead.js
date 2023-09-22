var fs = require("fs");
console.log("Going to write into existing file");

// Open a new file with name input.txt and write Simply Easy Learning! to it.
fs.writeFile('input.txt', 'just writing the javascript', function(err) {
   console.log("Data written successfully!");
   console.log("Let's read newly written data");

   // Read the newly written file and print all of its content on the console
   fs.readFile('/Users/aravindbalaji/Documents/Javascript/Day5/input.txt', function (err, data) {
      console.log("Asynchronous read: " + data.toString());
   });
});