//map get 
// initialisation of the map
// using the set keyword
// var map1=new Map();  
// // // insert the data inside the jsmap
// // // key and value pair 
// map1.set(1,"jQuery");  
// map1.set(2,"AngularJS");  
// map1.set(3,"Bootstrap");  
// // for (var [key,value] of map1){
// //       console.log(`${key}-> ${value}`)
//     // }
  
// // // // I am calling the based in the key
// // //we use the keyword get to invoke the key from the map

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
// var itr=map2.values();  
// // this will retrieve the keys
// // var itr=map2.keys();  
// // next() is again a keyword to check whetehr any value exists or not
// console.log(itr.next().value);  
// console.log(itr.next().value);  
// console.log(itr.next().value);

//map for loop

var map3=new Map();  
map3.set(1,"jQuery");  
map3.set(2,"AngularJS");  
map3.set(3,"Bootstrap");  

// // getting the total size
// // size is a keyword in js
// console.log('size of the map : ' , map3.size) 
// //// based onthe key we get the values
// console.log('size of the map : ' , map3.get(5)) // if the key s not available then undefeined
// var itr=map3.keys;  
// // // iterate over the map using normal forloop


// for (var [key,value] of map3){
//   console.log(`${key}-> ${value}`)
// }

// convert map to array 
// var maptoarray = Array.from(map3.entries())

// for (var i =0;i<maptoarray.length;i++ ){

//   let key = maptoarray[i][0];
//   let value = maptoarray[i][1];
//   console.log(`${key} -> ${value}`)
// }


//add a entry 
map3.set(6,"abc")
for (var [key,value] of map3){
  console.log(`${key}-> ${value}`)
}
// // update the entry
map3.set(6,"abcd")
for (var [key,value] of map3){
    console.log(`${key}-> ${value}`)
  }

  // delete the entry in the map
  map3.delete(6)

  for (var [key,value] of map3){
    console.log(`${key}-> ${value}`)
  }

// var map3=new Map();
// map3.set(1,"jQuery");
// map3.set(2,"AngularJS");
// map3.set(3,"Bootstrap");

// for(var [key,value] of map3){
// console.log(`${key}->${value}`)
// }