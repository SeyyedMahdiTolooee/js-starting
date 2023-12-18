let numberToAdd = document.getElementById("number");
let cBtn = document.getElementById("btn");
let res = document.getElementById("result");

let enQwerty = [
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
];
let faQwerty = [
	"ض",
	"ص",
	"ث",
	"ق",
	"ف",
	"غ",
	"ع",
	"ه",
	"خ",
	"ح",
	"ج",
	"چ",
	"ش",
	"س",
	"ی",
	"ب",
	"ل",
	"ا",
	"ت",
	"ن",
	"م",
	"ک",
	"گ",
	"ظ",
	"ط",
	"ز",
	"ر",
	"ذ",
	"د",
	"پ",
	"و",
];

cBtn.addEventListener("click", () => {
	let b = Number(numberToAdd.value);
	if (b >= 65 && b <= 90) {
		b = b + 32;
	}
	let a = String.fromCharCode(b);
	console.log(a);
	console.log(String.fromCharCode(b));

	for (let i = 0; i < enQwerty.length; i++) {
		if (enQwerty[i] === a) {
			let j = faQwerty[i];
			console.log(j);
			res.innerHTML= j
		}
	}
});
// console.log(faQwerty[enQwerty.findIndex(x=>x==String.fromCharCode(numberToAdd.value))])
