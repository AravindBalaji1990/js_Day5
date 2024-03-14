// var set = new Set(); 
// // we add the elements to the set 
// set.add("jQuery");  //key hascode -> 876786hgj
// set.add("AngularJS");  
// set.add("Bootstrap");  
// set.add("jQuery");  //key hascode -> 876786hgj
// var itr=set.values(); 
// // // // check the values inside the set  
// // // // next() -> keywor din javascript where it check wether any value is avialable or not
// console.log(itr.next().value);  
// console.log(itr.next().value);  
// console.log(itr.next().value);  
// console.log(itr.next().value);  

// // use of forloop
// // set always starts with starting index of 0
// var set = new Set();  
// set.add("jQuery");  //0
// set.add("AngularJS");  //1
// set.add("Bootstrap");  //2
// var itr=set.values();  
// for(i=0;i<set.size;i++)  
//   {  
// console.log(itr.next().value);  
//   }  

// // usageof for in/for each loop
var set = new Set();  
set.add("jQuery");  
set.add("AngularJS");  
set.add("Bootstrap"); 
// if some value is availavle or not in a se 
console.log(set.has('jQuery')) // it is case sensitve
console.log(set.delete('jQuery')) // it is case sensitve
// for each loop where it iterates and
//prints the value
for (var i of set) {  
 console.log(i);  
 
}  