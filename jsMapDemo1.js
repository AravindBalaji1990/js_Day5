//map get 
// initialisation of the map
// using the set keyword
// var map1=new Map();  
// map1.set(1,"jQuery");  
// map1.set(2,"AngularJS");  
// map1.set(3,"Bootstrap");  
  
// // I am calling the based in the key
//we use the keyword get to invoke the key from the map
// console.log(map1.get(1));  
// console.log(map1.get(2));  
// console.log(map1.get(3));  

// map values
// var map2=new Map();  
// map2.set(1,"jQuery");  
// map2.set(2,"AngularJS");  
// map2.set(3,"Bootstrap");
// // to retrive the values  
// //values() is a keyword to check/retrive the values on the map
// // var itr=map2.values();  
// // this will retrieve the keys
// var itr=map2.keys();  
// // next() is again a keyword to check whetehr any value exists or not
// console.log(itr.next().value);  
// console.log(itr.next().value);  
// console.log(itr.next().value);

//map for loop

var map3=new Map();  
map3.set(1,"jQuery");  
map3.set(2,"AngularJS");  
map3.set(3,"Bootstrap");  

// getting the total size
// size is a keyword in js
console.log('size of the map : ' , map3.size) 
//// based onthe key we get the values
console.log('size of the map : ' , map3.get(2)) 
var itr=map3.keys;  
// iterate over the map using normal forloop
for(i=0;i<map3.size;i++)  
  {  
    //next -> function available in the iteratable class 
    //where it checks for the next item availability
  console.log(itr.next());  
    
  }