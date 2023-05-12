// this keyword
"use-strict"
// Each Method we access through special keyword called
// "this"

// "this" keyword represent the object.
// calling the method where this keyword is present.

let person = {
  firstName: 'amit',
  lastName: 'verma',
  city: 'delhi',
  bithday: '1998',
  Education: 'Software dev',
  getSummery: function () {
    // return `amit verma lives in delhi. in 1998 he is born, Now he is working as a software deverloper`
    // now it's dynamic and can change 
    //return ` ${this.firstName} ${this.lastName}lives in ${this.city}. in ${this.bithday} he is born, Now he is working as a ${this.Education}`
    return this
  }
}



console.log(person.getSummery())



// change through this

let airplane = {
  flightName: 'fly india',

  atacode: 'FI',

  ratings: 4.9,

  book(passenger, flightNum) {
    console.log(
      `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
    );
  },
};

let bookMethod = airplane.book; // john Booked flight in undefined with flight Number undefined8754
// unable to access the this keyword
/// 'this' not valid outside when it's calling.
bookMethods('amit', 754);

// Bind method
let bookMethods = airplane.book.bind(airplane); //john Booked flight in fly india with flight Number FI8754

// bookMethods('john', 8754);

/*
This is because bookMethod is now a standalone function that has lost its context, 
so the this keyword no longer refers to the airplane object. 
To fix this issue, you can use the bind method to bind the airplane object as the context for the bookMethod, 
*/