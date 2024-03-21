const fruits = ['apple', 'cherry', 'mango', 'grapes', 'banana'];

console.log( typeof fruits );

console.log( fruits.length );
const fruit = 'Strawberry';
console.log(fruit.length);

// indexing

console.log( fruits[2] );  // also works with string
console.log( fruits.indexOf('mango') ); // also works with string
console.log( fruits.at(-2) );

// slicing
console.log( fruits.slice(1, 4) ); // also works with string
console.log( fruits.slice(1) );
console.log( fruits.slice(-2) );
console.log( fruits.slice(4, 50) );

// adding new elements
fruits.push('pineapple'); // adds element at the end of array
fruits.unshift('kiwi'); // adds element at the beginning of array
console.log(fruits);

// removing elements
fruits.pop(); // removes element from the end of array
fruits.shift(); // removes element from the beginning of array

console.log(fruits);

// adding and removing elements from array
fruits.splice(2, 0, 'orange');
console.log(fruits);