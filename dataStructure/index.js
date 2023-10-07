"use strict";
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
};
const jonas = {
	firstName: "jonas",
	birthYear: "1991",
	calcAge: function () {
		console.log(2037 - this.birthYear);
		let self = this;
		const isMillennial = function () {
			console.log(this);
			console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
		};
		isMillennial();
	},

	greet: function () {
		console.log(`hi ${this.firstName}`);
	},
};
jonas.calcAge();
jonas.greet();

// const dickHead = {
// 	name: "morad",
// 	age: 4565,
// 	lastName: "kale kiri",
// 	biNamoos: ["koskesh", "kooni pedar"],
// };
// const kirPedar = Object.assign({}, dickHead);
// console.log(kirPedar);

// kirPedar.biNamoos.push("Kooni"); //add new element to array
// console.log(kirPedar);
// console.log(dickHead);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// const { name: kir, openingHours: kooniKhan, categories: items } = restaurant;
// console.log(kir, kooniKhan, items);
// const { menu: kiri = "menuItems", openingHours: kooniKash, categories: itemsHa } = restaurant;
// console.log(kiri, kooniKash, itemsHa);
// const arr = [1, 4, 2, 6, 345, 2435, 234, 678, 234];
// const newArr = ["flllkd", ...arr];
// console.log(arr);
// console.log(newArr);
// console.log(...newArr);
const newMenu = [...restaurant.mainMenu, "gnocci"];

console.log(newMenu);

restaurant.mainMenu = newMenu;

console.log(restaurant.mainMenu);

restaurant.mainMenu = [...restaurant.mainMenu, "ghorme sabzi"];
console.log(restaurant.mainMenu);
restaurant.menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(restaurant);
// looping over arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
	console.log(item);
}

// looping objects

// sets and maps

let question = new Map([
	["question", "Which one is the best programming language?"],
	["answer1", "C"],
	["answer2", "java"],
	["answer3", "c++"],
	["answer4", "javascript"],
	["correct", "answer4"],
	[true, "correct"],
	[false, "try again"],
]);
