// object oriented programming

let car = function(color, model){
  // console.log(this)
  this.color = color
  this.model = model
}
 let res = new car('red', 2023)
 console.log(res) // car { color: 'red', model: 2023 }
/// new object created with empty initalization
// this{object}
// Object linked to prototype
// car {}
// function behave as an object


console.log(car.prototype) // constructor

// Prototypes are not commonly used in React Native,
// as React Native follows a component-based architecture that emphasizes composition and reusability