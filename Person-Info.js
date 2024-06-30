function personInfo(firstName, lastName, age) {
    let person = {};             // Initialize an empty object
    person.firstName = firstName;  // Set the firstName property
    person.lastName = lastName;    // Set the lastName property
    person.age = age;              // Set the age property
 

    
    return person;  // Return the constructed object (optional if you only need the console output)
}


console.log(personInfo("Peter", "Pan", 20));
//personInfo("George", "Smith", "18");