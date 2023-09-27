"use strict";
// const restaurant = {
// 	name: "Classico Italiano",
// 	location: "Via Angelo Tavanti 23, Firenze, Italy",
// 	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
// 	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
// 	mainMenu: ["Pizza", "Pasta", "Risotto"],
// };
// const [a, b] = restaurant.categories;
// console.log(a, b);
// const [d, , c] = restaurant.starterMenu;
// console.log(c, d);
// let [secondary, first] = restaurant.mainMenu;
// console.log(secondary, first);
// [first, secondary] = [secondary, first];
// console.log(secondary, first);
// .
let q = document.getElementById("q");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");

let questionList = {
	question: "آیا یک برابر دو است؟",
	answers: [
		{ option: "بله", flag: true },
		{ option: "خیر", flag: false },
		{ option: "نمیدانم", flag: false },
		{ option: "اطلاعی ندارم", flag: false },
	],
};

q.innerHTML = questionList.question;
ans1.innerHTML = questionList.answers[0].option;
ans2.innerHTML = questionList.answers[1].option;
ans3.innerHTML = questionList.answers[2].option;
ans4.innerHTML = questionList.answers[3].option;
console.log(questionList.answers[0].option);
// for (let i = 0; (answers[0] = true); i++) {
// 	point = i;
// }
