// exception handling Example for finally 
        var a = 100;
        
        try {
           console.log("Value of variable a is : " + a );
        }
        catch ( e ) {
            console.log("Error: " + e.description );
        }
        finally {
            console.log("Finally block will always execute!" );
        }