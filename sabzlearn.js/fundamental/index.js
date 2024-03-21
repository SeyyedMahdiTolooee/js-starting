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
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) console.log(i);
}
let userNumber = 0;
let sum = 0;
let count = 0;
let avg = 0;
while (userNumber != -1) {
  userNumber = Number(
    prompt(
      `enter your number \n now the sum is ${sum}\n and the average is ${Math.floor(
        avg
      )}`
    )
  );
  if (userNumber != -1) {
    count++;
    sum += userNumber;
    avg = sum / count;
    console.log(
      `the counter is on${count}\n your number is ${userNumber}\n now the sum is ${sum}\n and the average is ${Math.floor(
        avg
      )}\n\n`
    );
  }
}
let i = 0;
do {
  i++;
  console.log(i);
} while (i < 3);

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
let power3 = 1;
let k = 0;
do {
  k++;
  power3 = power3 * firstNumber;
} while (k < secondNumber);
console.log("do while power is", power3);

let sum2 = 0;
let avgArr = [14, 15, 28, 24, 246, 32, 16, 17];
for (let i = 0; i < avgArr.length; i++) {
  sum2 = sum2 + avgArr[i];
}
console.log(sum2);
console.log(avgArr.length);
let avgArrAvg = sum2 / avgArr.length;
console.log(avgArrAvg);

let usersData = {
  user100001: {
    userId: 100001,
    firstName: "Ali",
    lastName: "Alavi",
    age: 24,
    height: 194,
  },
  user100002: {
    userId: 100002,
    firstName: "mohammad",
    lastName: "kiriMagham",
    age: 25,
    height: 183,
  },
};
let user = {
  name: "ali",
  age: 24,
};
console.log(`userName is:${user.name} and age is : ${user.age}`);
let userArr = [
  {
    userId: 1000001,
    firstName: "Ali",
    lastName: "Alavi",
    age: 24,
    height: 194,
  },
  {
    userId: 1000002,
    firstName: "Ahmad",
    lastName: "pirMahdi",
    age: 26,
    height: 184,
  },
  {
    userId: 1000003,
    firstName: "Ghozmit",
    lastName: "AlphaGhozmos3",
    age: 302,
    height: 154,
  },
];
userArr.forEach((element) => {
  element.userId.includes("userId")
    ? console.log(`${element.userId}`)
    : console.log("no");
  console.log(
    `the name is ${element.lastName}, ${element.firstName} ${element.lastName} } `
  );
});
userArr.forEach((user) => {
  if (user.lastName.includes("Alavi" || "alavi"))
    console.log(user.userId, userArr.indexOf(user));
});
userArr.some(function (user) {
  user.firstName == "Ghozmit" ? console.log(user) : null;
});

let allProducts = [
  { id: 1, name: "laptop", price: 17000000 },
  { id: 2, name: "phone", price: 7000000 },
  { id: 3, name: "milk", price: 35000 },
  { id: 4, name: "pen", price: 12000 },
  { id: 5, name: "pencil", price: 9000 },
  { id: 6, name: "cable", price: 55000 },
  { id: 7, name: "water", price: 6000 },
  { id: 8, name: "soft drink", price: 13000 },
];
let userBasket = [allProducts[1], allProducts[4]];
console.log(allProducts);
console.log(userBasket);
