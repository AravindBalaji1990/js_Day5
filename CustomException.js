// constructor function
function MyCustomError(message) {
    // this the exact error i am going to get for my exception
  // this.name = "error cusotm";
  // if already a pre-defined exception avialable i use message
  // if not i use the other one
  this.message = message || "Default error message";
  // the below item makes the ur exception visible
  //printstacktrace = stack
  //stack part of Error funciton in javascript 
  //it helps in debugging purpose to identify the source if error 
  this.stack = new Error().stack;
}

// Inherit from the built-in Error object
// inheritance - prototype way of assigning the parent to child
MyCustomError.prototype = Object.create(Error.prototype);
MyCustomError.prototype.constructor = MyCustomError;

// Example usage:
function divide(a, b) {
  if (b === 0) {
    throw new MyCustomError();
  }
  return a / b;
}

try {
  console.log(divide(10, 0));   // Throws a MyCustomError
} catch (error) {
  if (error instanceof MyCustomError) {
    console.error("Custom Error occurred:", error.message);
  } else {
    console.error("Unknown Error occurred:", error.message);
  }
}
