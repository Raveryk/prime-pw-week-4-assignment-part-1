console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName( name ) {
  return 'Greetings, ' + name;
} // end helloName

// Remember to call the function to test
console.log(helloName('Reese') );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let answer = firstNumber + secondNumber;
  return answer;
} // end addNumbers

console.log(addNumbers(2, 6));
console.log(addNumbers(4, 17));



// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ){
  let answer = num0 * num1 * num2;
  return answer;
} // end multiplyThree

console.log(multiplyThree(1, 3, 5));
console.log(multiplyThree(4, 2, 5));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else if ( number <= 0 ){
    return false;
}
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0) {
    return array[array.length - 1];
  } else if (array.length = 0) {
    return 'undefined'
  }
}

console.log(getLast([1, 2, 3, 4]));
console.log(getLast(['yes', 'no', 'maybe', "I don't know", 'most definitely']));
console.log(getLast([]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for ( let item of array ) {
    if ( item === value ) {
      return true;
    }
  } return false; /// Definitely need to ask question about this!! Why did it not work when I used an if else statement but did work when my return false statement was outside the scope of the loop?? Or does that have to do with the 'for of' loop?
} // end find

console.log(find( 7, [1, 3, 5, 7]));
console.log(find( 2, [2, 4, 3, 8]));
console.log(find( 3, [9, 6, 3]));
console.log(find( 4, [1, 2, 3, 5]));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0) ) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0;
  let i = 0;
  // TODO: loop to add items
  while ( i < array.length ) {
    sum += array[i++];
  }
  return sum;
} // end sumALl

console.log( sumAll( [1, 3, 5, 7]));
console.log( sumAll( [6, 3, 4, 6, 10]));
console.log( sumAll( [3, 5]));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
