// Custom exception class
class CustomError extends Error {
constructor(message) {
super(message);
this.name = 'CustomError';
}
}

// Example usage
function throwError() {
throw new CustomError();
}

try {
throwError();
} catch (error) {
if (error instanceof CustomError) {
console.error('Caught custom error:', error.message);
} else {
console.error('Caught unexpected error:', error.message);
}
}