// ================ Q#01

// var city;
// city = prompt("Enter city name");

// if (city === "Karachi") {
//     document.write("<p>Welcome to the city of lights</p>")
// }
// else if (city === 'Lahore') {
//     document.write("<p>Welcome to the city Lahore</p>")
// }

// ================ Q#02

// var gender;
// gender = prompt("Enter your gender:");
// if (gender === "Male") {
//     document.write("<p>Good morning, Sir!</p>")
// }
// else if (gender === "Female") {
//     document.write("<p>Good morning, Ma'am!</p>")
// }

// ================ Q#03

// var color;
// gender = prompt("Enter your gender:");
// if (gender === "red") {
//     document.write("<p>Must Stop!</p>")
// }
// else if (gender === "yellow") {
//     document.write("<p>ready To Move</p>")
// }
// else if (gender === "green") {
//     document.write("<p>Move Now</p>")
// }

// ================ Q#04

// var fuel;
// gender = parseFloat(prompt("Remaining Fuel:"));
// if (gender <= 0.25) {
//     document.write("<p>Please refill the fuel in your car.</p>")
// }

// ================ Q#05

// a.
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// b.
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// c.var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// // d. 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// // e. 
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// // f.
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// ================ Q#06
// var total, num1, num2, num3, obtTotal, per, grade, remarks;

// total = 300

// num1 = parseInt(prompt("Enter marks for subject 1"));
// num2 = parseInt(prompt("Enter marks for subject 2"));
// num3 = parseInt(prompt("Enter marks for subject 3"));

// obtTotal = num1 + num2 + num3;

// per = Math.round((obtTotal / total) * 100);

// if (per >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if (per >= 70) {
//     grade = "A";
//     remarks = "Good";

// }
// else if (per >= 60) {
//     grade = "A";
//     remarks = "You need to improve"

// }
// else {
//     grade = "Fail"
//     remarks = "Sorry"
// }

// document.write("<h2>Marks Sheet</h2>");
// document.write("<h3>Total Marks: 300</h3>");
// document.write("<h3>Marks Obtained: " + obtTotal + "</h3>");
// document.write("<h3>Grade: " + grade + "</h3>");
// document.write("<h3>Remarks: " + remarks + "</h3>");

// ================ Q#07

// var num, guess;

// num = 7;
// guess = parseInt(prompt("Enter your guess from 1 to 10"));
// if (guess === num){
//     document.write("<p>Bingo! Correct answer</p>");
// }
// else if (guess === num++){
//     document.write("<p>Close enough to the current answer.</p>");
// }

// ================ Q#08

// var guess;

// guess = parseInt(prompt("Enter any number"));
// if (if guess%3 === 0){
//     document.write("<p>Number is divisible by 3</p>");
// }

// ================ Q#09

// var guess;

// guess = parseInt(prompt("Enter number to check even or odd"));
// if (guess % 2 === 0) {
//     document.write("<p>Number is even</p>");
// } else if (guess % 2 !== 0) {
//     document.write("<p>Number is odd</p>");
// }

// ================ Q#10

// var temp;

// temp = parseInt(prompt("Enter Temperature"));
// if (temp > 40) {
//     document.write("<p>It is too hot outside</p>");
// } else if (temp > 30) {
//     document.write("<p>The weather today is normal</p>");
// } else if (temp > 20) {
//     document.write("<p>Today's weather is cool.</p>");
// } else if (temp > 10) {
//     document.write("<p>OMG! Today's weather is so cool</p>");
// }

// ================ Q#11

// var frst, scnd, res, op;

// frst = parseInt(prompt("Enter first number"));
// scnd = parseInt(prompt("Enter second number"));
// op = prompt("Enter operator to perform");
// if (op === "+") {
//     res = frst + scnd;
// } else if (op === "-") {
//     res = frst - scnd;
// } else if (op === "*") {
//     res = frst * scnd;
// } else if (op === "/") {
//     res = frst / scnd;
// }
// document.write(`<p>${frst} ${op} ${scnd} = ${res}</p>`);


//chap12-13
// ================ Q#01

// var input, char;
// input = prompt("Enter a character");
// char = input.charCodeAt(0);
// if (char >= 65 && char <= 90) {
//     document.write("<p>Upper case letter</p>")
// } else if (char >= 97 && char <= 122) {
//     document.write("<p>lower case letter</p>")
// } else if (char >= 48 && char <= 57) {
//     document.write("<p>number</p>")
// }

// ================ Q#02

// var f, s;

// f = parseInt(prompt("Enter 1st number"))
// s = parseInt(prompt("Enter 2nd number"))
// if (f > s) {
//     document.write(`<p>${f}</p>`)

// } else if (s > f) {
//     document.write(`<p>${s}</p>`)
// }

// ================ Q#03

// var f;

// f = parseInt(prompt("Enter 1st number"))
// if (f > 0) {
//     document.write(`<p>number is positive</p>`)

// } else if (f < 0) {
//     document.write(`<p>number is negative</p>`)
// }else if (f === 0) {
//     document.write(`<p>number is zero</p>`)
// }

// ================ Q#04

// var  char;
// char = prompt("Enter an alphabet");
// if (char === 'a' || char === 'e' || char === 'i'|| char === 'o'|| char === 'u') {
//     document.write(`<p>True</p>`)
// } else if (char >= 97 && char <= 122) {
//     document.write(`<p>False</p>`)
// }

// ================ Q#05

// var char, password;
// password = 'abc123'
// char = prompt("Enter password");
// if (char === '') {
//     document.write(`<p>Please Enter Your Password</p>`)
// } else if (char === password) {
//     document.write(`<p>Correct Password</p>`)
// } else if (char !== password) {
//     document.write(`<p>Incorrect Password</p>`)
// }

// ================ Q#06

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// ================ Q#07

// var time;
// time = parseInt(prompt("Enter current time"));

// if (time >= 0000 && time < 1200) {
//     document.write(`<p>Good morning</p>`)
// } else if (time >= 1200 && time < 1700) {
//     document.write(`<p>Good afternoon</p>`)
// } else if (time >= 1700 && time < 2100) {
//     document.write(`<p>Good evening</p>`)
// } else if (time >= 2100 && time < 2359) {
//     document.write(`<p>Good afternoon</p>`)
// }