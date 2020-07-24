// ================ Q#1

// var date = Date()
// document.write(`<p>${date}</p>`)

// ================ Q#2

// var date = new Date();
// var num = date.getMonth();
// var month = []
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// document.write(`<p>Current Month: ${month[num]}</p>`)

// ================ Q#3

// var date = new Date();
// var num = date.getDay();
// var day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
// document.write(`<p>Today is: ${day[num]}</p>`)

// ================ Q#4

// var date = new Date();
// var num = date.getDay();
// if (num === 0 || num === 6) {

//     document.write(`<p>Today is Fun Day</p>`)
// }
// else {
//     document.write(`<p>Normal working day</p>`)

// }

// ================ Q#5

// var date = new Date();
// var num = date.getDate();
// if (num < 16) {

//     document.write(`<p>First fifteen days of the month</p>`)
// }
// else {
//     document.write(`<p>Last days of the month</p>`)

// }

// ================ Q#6

// var date = new Date();
// var num = date.getTime();
// document.write(`<p>${date}</p>`)
// document.write(`<p>Elapsed milliseconds since January 1, 1970: ${num}</p>`)
// document.write(`<p>Elapsed minutes since January 1, 1970: ${num / (60 * 60 * 1000)}</p>`)

// ================ Q#7

// var date = new Date();
// var num = date.getHours();
// if (num > 11) {
//     document.write(`<p>It's PM,</p>`);
// } else if (num <= 11) {
//     document.write(`<p>It's AM,</p>`);
// }

// ================ Q#8

// var date = new Date(2020, 11, 31, 00, 00, 00);
// document.write(`<p>${date}</p>`)

// ================ Q#9

// var date = new Date(2020, 03, 24);
// var today = new Date();
// var one_day = 1000 * 60 * 60 * 24
// var d = date.getTime();
// var t = today.getTime();
// document.write(`<p>${Math.floor((t - d) / one_day)} days has passed since 1st Ramadan, 20202</p>`)

// ================ Q#10

// var today = new Date();
// var date = new Date(2015, 0, 1);
// var d = date.getTime();
// var t = today.getTime();
// var min = Math.floor((t - d) / (1000 * 60))
// document.write(`<p>referance date: ${today}</p>`)
// document.write(`<p>${min} </p>`)

// ================ Q#11

// var today = new Date();
// var h = today.getHours()
// var d = today.setHours(16);
// document.write(`<p>current date: ${today} </p>`)
// today.setHours(h);
// document.write(`<p>One Hour ago, it was ${today} </p>`)

// ================ Q#12

// var today = new Date();
// var h = today.getFullYear()
// document.write(`<p>current date: ${today} </p>`)
// today.setFullYear(1920);
// document.write(`<p>100 years ago, it was ${today} </p>`)

// ================ Q#13

// var today = new Date();
// var age = Number(prompt("Enter your age: "));
// var bYear = today.getFullYear() - age;
// document.write(`<p>Your age: ${age} </p>`)
// document.write(`<p>Birth Year: ${bYear} </p>`)

//chap 35 -38

// ================ Q#1

// function getDate() {
//     var date = Date()
//     document.write(`<p>${date}</p>`)
// }
// getDate();

// ================ Q#2

// function prinName() {
//     var frst, scnd;
//     frst = prompt("Enter your first name:")
//     scnd = prompt("Enter your last name:")
//     document.write(`<p>Good Eevening ${frst} ${scnd}</p>`)

// }
// prinName()

// ================ Q#3

// function sum() {
//     var frst, scnd;
//     frst = Number(prompt("Enter first number:"));
//     scnd = Number(prompt("Enter second number:"));
//     document.write(`<p>sum of ${frst} and ${scnd} ${frst + scnd}</p>`);

// }
// sum();

// ================ Q#4

// frst = Number(prompt("Enter first number:"));
// scnd = Number(prompt("Enter second number:"));
// op = prompt("Enter operator:");
// sum(frst, scnd, op);

// function sum(frst, scnd, op) {
//     if (op === "+") {
//         res = frst + scnd;
//     } else if (op === "-") {
//         res = frst - scnd;
//     } else if (op === "*") {
//         res = frst * scnd;
//     } else if (op === "/") {
//         res = frst / scnd;
//     }
//     document.write(`<p>${frst} ${op} ${scnd} = ${res}</p>`);

// }

// ================ Q#5

// var frst = Number(prompt("Enter number:"));
// square(frst)
// function square(sq) {
//     document.write(`<p>${sq * sq}</p>`);
// }

// ================ Q#6

// function fact(num) {
//     var f = 1;
//     for (var i = 1; i <= num; num++) {
//         f = f * i;
//     }
//     document.write(`<p>Factorial of ${num} is ${f}</p>`);
// }
// var frst = Number(prompt("Enter number:"));
// fact(frst);

// ================ Q#7

// function fn() {
//     var frst = Number(prompt("Enter number:"));
//     var scnd = Number(prompt("Enter number:"));
//     for (; frst <= scnd; frst++) {
//         document.write(`<p>${frst}</p>`);
//     }
// }

// fn();

// ================ Q#8

// function calcHyp(base, perp) {
//     function square(sq) {
//             return sq*sq;
//     }
//     base = square(base);
//     perp = square(perp);
//     hyp = Math.sqrt(base+perp)
//     return hyp;
// }

// var frst = Number(prompt("Enter base:"));
// var scnd = Number(prompt("Enter perpendicular:"));
// document.write(`<p>${calcHyp(frst, scnd)}</p>`);

// ================ Q#9

// function area(width, height) {
//     return width * height;
// }
// var frst = 10;
// var scnd = 10;
// document.write(`<p>Area by passing variable${area(frst, scnd)}</p>`);
// document.write(`<p>Area by passing values${area(10, 10)}</p>`);

// ================ Q#10

// function palindrome(str) {
//     var rev = str.split('').reverse().join('');
//     if (rev === str) {
//         document.write(`<p>string is palindrome</p>`);
//     } else {
//         document.write(`<p>string is not a palindrome</p>`);

//     }
// }

// var frst = (prompt("Enter string to check palindrome"));
// palindrome(frst);

// ================ Q#11

// function toUp(str) {
//     var arr = str.split(' ');
//     var res = []
//     for (var i in arr) {
//         var j = arr[i].toLowerCase().split('');

//         j[0] = j[0].toUpperCase();
//         k = j.join('');
//         res.push(k);
//     }
//     var string = res.join(' ');
//     document.write(`<p>${string}</p>`);

// }

// var frst = (prompt("Enter string to check palindrome"));
// toUp(frst);

// ================ Q#12

// function longestString(str) {
//     var arr = str.split(' ');
//     var res = '';
//     for (var i in arr) {
//         if (arr[i].length > res.length) {
//             res = arr[i]
//         }
//     }
//     document.write(`<p>${res}</p>`);

// }

// var frst = (prompt("Enter string to check palindrome"));
// longestString(frst);

// ================ Q#13

// function countLetter(str, letter) {
//     var arr = str.split('');
//     var count = 0;
//     for (var i in arr) {
//         if (arr[i] === letter) {
//             count++
//         }
//     }
//     document.write(`<p>${str} has ${count} ${letter}</p>`);

// }

// var frst = (prompt("Enter string: "));
// var letter = (prompt("Enter letter to count: "));
// countLetter(frst, letter);

// ================ Q#14

// function calcCircumference(r) {
//     return (2 * 3.1415 * r);
// }

// function calcArea(r) {
//     return (3.1415 * r * r);
// }
// var r = Number(prompt("Enter radius: "));
// calcCircumference(r);
// document.write(`<p>circumference of circle ${calcCircumference(r)}</p>`);
// document.write(`<p>area of circle ${calcArea(r)}</p>`);

//chap 38 - 42

// ================ Q#1

// function power(a, b) {
//     var ans = 1;
//     for (var i = 0; i < b; i++) {
//         ans *= a;
//     }
//     return ans;
// }

// var base, pow;
// base = Number(prompt("Enter base"));
// pow = Number(prompt("Enter power"));
// document.write(`power ${pow} to base ${base} is ${power(base, pow)}`);

// ================ Q#2

// function leapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return "It's a leap year";
//     } else {
//         return "It's not a leap year";
//     }
// }

// var year = Number(prompt("Enter year"));
// document.write(`${leapYear(year)}`);

// ================ Q#3

// function calcArea(S, a, b, c) {
//     return (S * (S - a) * (S - b) * (S - c));
// }

// function calcS(a, b, c) {
//     return ((a + b + c) / 2);
// }

// var input = (prompt("Enter sides as comma separated (a,b,c)"));
// var sides = input.split(',');
// var a, b, c;
// a = Number(sides[0]);
// b = Number(sides[1]);
// c = Number(sides[2]);
// S = calcS(a, b, c);
// A = calcArea(S, a, b, c);
// document.write(`Area of triangle is with sides ${a} ${b} ${c} is ${A}`);

// ================ Q#4

// function average(a, b, c) {
//     return ((a + b + c) / 3);
// }

// function percentage(average) {
//     return ((average) * 100);
// }

// function init() {
//     var input = (prompt("Enter marks out of 100 as comma separated (a,b,c)"));
//     var sides = input.split(',');
//     var a, b, c;
//     a = Number(sides[0]);
//     b = Number(sides[1]);
//     c = Number(sides[2]);
//     average = average(a, b, c);
//     percentage = percentage(average);
//     document.write(`Average: ${average}, Percentage: ${percentage}%`);
// }

// init();

// ================ Q#5

// function indexOf(arr, char) {
//     for (var i in arr) {
//         if (arr[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// var arr = ['a', 'b', 'c', 'd', 'e'];
// var index = indexOf(arr, 'c');
// document.write(`index: ${index} of 'c' in ${arr}`);

// ================ Q#6

// function deleteVowles(scentence) {
//     scentence = scentence.replace(/[aeiou]/gi, '');
//     return scentence;
// }

// var input = (prompt("Enter scentence"));
// document.write(`<p>${input}</p>`);
// if (input.length <= 25) {
//     var scen = deleteVowles(input);
//     document.write(`<p>${scen}</p>`);

// }

// ================ Q#7