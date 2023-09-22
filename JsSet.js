// var set = new Set();  
// set.add("jQuery");  //key hascode -> 876786hgj
// set.add("AngularJS");  
// set.add("Bootstrap");  
// var itr=set.values();  
// console.log(itr.next().value);  
// console.log(itr.next().value);  
// console.log(itr.next().value);  

// use of forloop
// var set = new Set();  
// set.add("jQuery");  //0
// set.add("AngularJS");  //1
// set.add("Bootstrap");  //2
// var itr=set.values();  
// for(i=0;i<set.size;i++)  
//   {  
// console.log(itr.next().value);  
//   }  

// usageof for in/for each loop
  var set = new Set();  
set.add("jQuery");  
set.add("AngularJS");  
set.add("Bootstrap"); 
console.log(set.has('jQuery')) // it is case sensitve
for (var i of set) {  
 console.log(i);  
 
}  