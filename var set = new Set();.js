var set = new Set();  
set.add("jQuery");  
set.add("AngularJS");  
set.add("Bootstrap"); 
var sortedaray =[];

set.forEach(item => sortedaray.push(item))

sortedaray.sort((a,b) => a-b)

var sortedset = new Set(sortedaray)

console.log(sortedset)