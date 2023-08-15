##OUTPUT

Q) var trees = ["pine","pine","oak","maple","cherry"];
delete trees[3];
console.log(trees.length);

R: output => 5
- The code initializes an array called trees with five elements: "pine", "pine", "oak", "maple", and "cherry".
- It then uses the delete operator to delete the element at index 3, which is "maple".
  After this operation, the array becomes: ["pine", "pine", "oak", empty, "cherry"].
- Finally, it logs the length of the array using console.log(trees.length). The .length property of an array returns the number of elements in the array. 
  In this case, there are still five elements in the array (even though one of them is empty due to the deletion), so the output is 5.

Note that using --delete-- on an array element will create an empty slot in the array, but it won't actually remove the slot itself. 
This is why the length of the array remains the same even after using delete on an element. 
To completely remove an element from an array, you should use methods like --.splice()-- or restructure the array using other array manipulation techniques.


Q) "10"+20+30

R: output => 102030
- The result is 102030 because when using the + operator with a string, 
it acts as a string concatenation operator (not binary +). To make it work as expected,
you should parse the "10" to integer before doing the +.

Q) var z = 1, y = z = typeof y;
console.log(y);

R: output => undefined
-The above code will output undefined. The order of execution with the = operator is right to left, which means typeof y will execute first and will return undefined, which will then pass to z and y. Thus, console.log(y); will print undefined.

Q) let x = 0.1 + 0.2;
let y = 0.3;
console.log(x == y);

R: false

- When you run this code and print the result of x == y, you may be surprised to see that it returns false. This is because of a limitation in how JavaScript handles floating-point numbers.

In JavaScript, numbers are represented using the *IEEE 754* standard for floating-point arithmetic. This means that not all decimal numbers can be represented exactly as binary floating-point numbers.

In particular, the decimal number 0.1 cannot be represented exactly in binary floating-point format. When you add 0.1 and 0.2 in JavaScript, the result is actually slightly larger than 0.3 due to rounding errors in the binary representation. Therefore, x is not equal to y.


