//map get 
// var map1=new Map();  
// map1.set(1,"jQuery");  
// map1.set(2,"AngularJS");  
// map1.set(3,"Bootstrap");  
  
// console.log(map1.get(1));  
// console.log(map1.get(2));  
// console.log(map1.get(3));  

// map values
// var map2=new Map();  
// map2.set(1,"jQuery");  
// map2.set(2,"AngularJS");  
// map2.set(3,"Bootstrap");
// // to retrive the values  
// var itr=map2.values();  
// // this will retrieve the keys
// // var itr=map2.keys();  
// console.log(itr.next().value);  
// console.log(itr.next().value);  
// console.log(itr.next().value);

//map for loop

var map3=new Map();  
map3.set(1,"jQuery");  
map3.set(2,"AngularJS");  
map3.set(3,"Bootstrap");  
console.log('size of the map : ' , map3.size) // getting the total size
console.log('size of the map : ' , map3.get(2)) // based onthe key we get the values
var itr=map3.values();  
// iterate over the map using normal forloop
for(i=0;i<map3.size;i++)  
  {  
console.log(itr.next().value);  
  }  