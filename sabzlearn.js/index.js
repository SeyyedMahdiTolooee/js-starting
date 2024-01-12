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
average(8, 12, 34	);
// string methods        /////////////////////////////////////////////////////////////////////////////////////////
