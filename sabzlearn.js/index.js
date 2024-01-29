let int = 14 * 3 ** 2;
console.log(int);
switch (int) {
	case 125:
		console.log(`result = 125`);
		break;
	case 126:
		console.log(`result = 126`);
		// var is global but let and const are not
		var ans = 126;
		break;
	case 127:
		console.log(`result = 127`);
		break;

	default:
		console.log("Not a valid number");
		break;
}
console.log(`answer is = ${ans}`);
console.log("fuck you");
let numA = 14 * 256;
let numB = 12 * 34;

showResult = function (x, y) {
	console.log(x);
	console.log(y);
	console.log(x + y);
};
showResult(numA, numB);

average = function (x, y, z) {
	let avg = (x + y + z) / 3;
	console.log(avg);
};
average(8, 12, 34);
// string methods        /////////////////////////////////////////////////////////////////////////////////////////

// math /////////////////////////////////////////////////////////////////////////////////////////

console.log("line 41 says", Math.PI);
console.log("line 42 says", Math.sqrt(483));

const randomNumber = Math.floor(Math.random() * (99999 - 10000) + 10000);
console.log(randomNumber);
let num1 = 10;
let num2 = ++num1;
console.log("num1", num1);
console.log("num2", num2);
// for (let i = 0; i < 100; i++) {
// 	if (i % 2 == 0) console.log(i);
// }
// let userNumber = 0;
// let sum = 0;
// let count = 0;
// let avg = 0;
// while (userNumber != -1) {
// 	userNumber = Number(
// 		prompt(
// 			`enter your number \n now the sum is ${sum}\n and the average is ${Math.floor(
// 				avg,
// 			)}`,
// 		),
// 	);
// 	if (userNumber != -1) {
// 		count++;
// 		sum += userNumber;
// 		avg = sum / count;
// 		console.log(
// 			`the counter is on${count}\n your number is ${userNumber}\n now the sum is ${sum}\n and the average is ${Math.floor(
// 				avg,
// 			)}\n\n`,
// 		);
// 	}
// }
// let i = 0;
// do {
// 	i++;
// 	console.log(i);
// } while (i < 3);

let firstNumber = Number(prompt("enter first number:", 0));
let secondNumber = Number(prompt("enter second number:", 0));
let power = 1;

for (let i = 0; i < secondNumber; i++) {
	power = power * firstNumber;
	console.log(power);
}
console.log("the power is:", power);
let j = 0;
let power2 = 1;
while (j < secondNumber) {
	power2 = power2 * firstNumber;
	console.log(power2);
	j++;
}
console.log("the while power is", power2);
let power3 = 1
let k=0
do {
	k++
	power3=power3*firstNumber
} while (k < secondNumber);
console.log('do while power is',power3)