let input = document.getElementById("input");
let rBtn = document.getElementById("btn");
let res = document.getElementById("result");
let j;
// console.log(input);
input.addEventListener("change", function () {
	console.log("input", input.value);
});
rBtn.addEventListener("click", function () {
	let i = input.value.charCodeAt(input.value);
	if (i >= 65 && i <= 90) {
		j = i + 32;
	} else if (i >= 97 && i <= 122) {
		j = i - 32;
	}
	res.innerHTML = String.fromCharCode(j);
});
