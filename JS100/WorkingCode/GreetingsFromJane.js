let jane = {
    firstName: 'Jane',
    lastName: 'Harrelson',
    age: 32,
    location: {
      country: 'Denmark',
      city: 'Aarhus'
    },
    occupation: 'engineer',
    // add code here
    greet: function(name){
        return "Hej, " + name;
    }
  };
  
  jane.greet('Bobby'); // Hej, Bobby!

  console.log(jane.greet('Bobby'));