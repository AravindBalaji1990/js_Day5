//Example for try and catch
try{  
    // array of string
var a= ["34","32","5","31","24","44","67"];
console.log(a); 
//b is undefined but still trying to fetch its value. Thus catch block will be invoked     
console.log(b); 
}catch(e){  
console.log("There is error which shows "+e.message); //Handling error  
}  