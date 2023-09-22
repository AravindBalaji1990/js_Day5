// try ..catch and throw
try {  
  if(3>2){
    throw new Error('This is the throw keyword'); //user-defined throw statement.  
  }
 }  
 catch (e) {  
   console.log(e.message); // This will generate an error message  
 }  