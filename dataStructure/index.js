"use strict";
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
};
const [a, b] = restaurant.categories;
console.log(a, b);
const [d, , c] = restaurant.starterMenu;
console.log(c, d);
let [secondary, first] = restaurant.mainMenu;
console.log(secondary, first);
[first, secondary] = [secondary, first];
console.log(secondary, first);
.