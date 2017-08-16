var fruits = ["apple", "banana", "cherry", "peach"];

// 1A: Write a function called outputFruitOld that consoles every fruit in a fruit array.
function outputFruitOld(array) {
	for(var i = 0; i < array.length; i++) {
		console.log('output from 1A:', array[i]);
	};
};
outputFruitOld(fruits);

// < B: Rewrite using forEach array method
//most similar to a for loop. does not return anything

// using callback function
fruits.forEach(listFruits);

function listFruits(fruit, index) {
	console.log('output from 1B:', fruit);
	console.log('index', index);
};

// using anonymous function

fruits.forEach(function(item) {
	console.log(item);
});

// 2A: Write a function called backwardFruitsOld that reverses the letters in each word in the fruits array.

function backwardFruitsOld(array) {
	let newArray = [];
	for(let i = 0; i < array.length; i++) {
	  newArray.push(array[i].split('').reverse().join(''));
	};
	return newArray;
};

console.log('using a for loop and push methods:',backwardFruitsOld(fruits));

// 2B: Rewrite using map array method

//the anonymous function in the map declaration does some code to each index of the array. it always takes a function as its argument

var secondNewArray = fruits.map(function(fruit) {
	return fruit.split('').reverse().join('');
});

console.log('using the map function with an anonymous function:',secondNewArray);

//with a callback function

function splitter(item) {
	return item.split('').reverse().join('');
}
console.log('using the splitter function:',fruits.map(splitter));

// 3A: Write a function called fiveLettersOnlyOld that only returns fruits that have 5 letters.

function fiveLettersOnlyOld(array) {
	var newArray = [];
	for(let i = 0; i < array.length; i++) {
		if (array[i].length === 5) {
			newArray.push(array[i]);
		};
	};
	return newArray;
};

console.log('only displaying fruits with 5 letters:',fiveLettersOnlyOld(fruits));

// 3B: Rewrite using filter array method

var filteredFruits = fruits.filter(function(fruit) {
	if(fruit.length === 5) {
		return true;
	}
});

console.log('filtered fruits:',filteredFruits);

// 4A: Write a function called addzOld that returns the sum of an array.

var numbers = [0, 1, 2, 3, 4];

function addzOld(array) {
	let sum = 0;
	for(let i = 0; i < array.length; i++) {
		sum += array[i];
	};
	return sum; 
};

console.log('adding numbers:',addzOld(numbers));

// 4B: Rewrite using reduce array method

var summation = numbers.reduce(function(accumulation, currentValue){
	return accumulation + currentValue;
});
console.log(summation)







