//Example for try and catch
try{  
    // array of string
var a= ["34","32","5","31","24","44","67"];
console.log(a); 
//b is undefined but still trying to fetch its value. Thus catch block will be invoked     
console.log(a[100]); 

}catch(xyz){  

console.error("There is error which shows -> "+xyz.message); //Handling error  
}  