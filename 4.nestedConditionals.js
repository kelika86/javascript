// Create a nested if statement that follows these rules. 
// If name is Jim Halpert 
    // if age is over 20 print "Old Jim"
    // If age is under 20 pring "Young Jim"

// If name is Michael Scott
    // IF age is over 20 print "Immature Mike"
    // If age is under 20 print "Super immature Mike"

// If name is not Michael or Jim print "Leslie Knope"

function nested(name, age){
    if (name==='Jim Halpert'){
        if (age>20){
            console.log("Old Jim");
        }
    
        else {
            console.log("Young Jim");
        } 
    }

    else if (name==='Michael Scott'){
        if (age>20){
            console.log("Immature Mike");
        }
        else {
            console.log("Super Immature Mike");
        }
    } 
    else {
        console.log("Leslie");
    }
}

nested('Michael Scott', 10)
nested('Jim Halpert', 40)
nested('') 

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
