/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

let number = 10;

// Només nombres parells
while (evenNumber <= 40) {
  if (number % 2 === 0){
    console.log(evenNumber);
  }
  evenNumber ++;
}

// Només nombres imparells
while (number <= 40) {
  if (number % 2 === 1){
    console.log(oddNumber);
  }
  oddNumber ++;
}