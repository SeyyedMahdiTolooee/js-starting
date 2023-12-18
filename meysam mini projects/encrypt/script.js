let input = document.getElementById("text");
let cBtn = document.getElementById("btn");
let outPut = document.getElementById("output");
let encryptSource = [
	"q",
	"w",
	"e",
	"r",
	"t",
	"y",
	"u",
	"i",
	"o",
	"p",
	"[",
	"]",
	"a",
	"s",
	"d",
	"f",
	"g",
	"h",
	"j",
	"k",
	"l",
	";",
	"'",
	"z",
	"x",
	"c",
	"v",
	"b",
	"n",
	"m",
	",",
	".",
	"/",
];
let b;
cBtn.addEventListener("click", () => {
  // console.log(input.value)
  for (let i = 0; i < encryptSource.length; i++) {
		if (input.value == encryptSource[i]) {
			b = encryptSource[i+=1];
		}
	}
	outPut.innerHTML = b;
	console.log(b);
});
