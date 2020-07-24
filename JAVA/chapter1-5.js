// ================CHAPTER 01 Q#01

// alert("Hello, World");

// ================CHAPTER 01 Q#02

// alert("Error! Please enter a valid password.");

// ================CHAPTER 01 Q#03

// alert("Welcome to JS Land...\nHappy coding");

// ================CHAPTER 01 Q#04

// alert("Welcome to JS Land...");
// alert("Happy coding");

// ================CHAPTER 01 Q#05

// console.log(alert('Hello, I can run JS through my web browser\'s console.'));

// xxxxxxxxxxxxxxxxCHAPTER 01xxxxxxxxxxxxxxxx



// xxxxxxxxxxxxxxxxCHAPTER 02xxxxxxxxxxxxxxxx

// ================CHAPTER 02 Q#01

// var userName;

// ================CHAPTER 02 Q#02

// var myName = "Syed Muhammad Ashhar Imam";

// ================CHAPTER 02 Q#03

// var message;
// message = "Hello World";
// alert(message);

// ================CHAPTER 02 Q#04

// var studentName, years, coarse;

// studentName = "John Doe";
// years = "15 years old";
// coarse = "Certified Mobile Application Development";

// alert(studentName);
// alert(years);
// alert(coarse);

// ================CHAPTER 02 Q#05

// var pizza, res;
// res= "";
// pizza = "Pizza";
// for (var i=pizza.length; i>=0; i--){
//     res +=  pizza.slice(0,i) + "\n";
// }
// alert(res);

// ================CHAPTER 02 Q#06

// var email;
// email = "ashharimam490@gmail.com";
// alert("My email address is "+email);

// ================CHAPTER 02 Q#07

// var book;
// book = "A smarter way to learn JavaScript";
// alert("I\'m trying to learn from book "+book);


// ================CHAPTER 02 Q#08

// var txt = "<h1>Yah! I can write HTML content through JavaScript</h1>";
// document.write(txt);

// ================CHAPTER 02 Q#08

// var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(str);

// xxxxxxxxxxxxxxxxCHAPTER 02xxxxxxxxxxxxxxxx



// xxxxxxxxxxxxxxxxCHAPTER 03xxxxxxxxxxxxxxxsx

// ================CHAPTER 03 Q#01

// var age=15;
// alert("I am "+age+" years old");

// ================CHAPTER 03 Q#03

// var birthYear = 1998, txt1 = "<h1>My birth year is "+ birthYear +"</h1>", txt2 = "<h1>Data type of declared valiable is "+ typeof(birthYear) +"</h1>";

// document.write(txt1);
// document.write(txt2);

// ================CHAPTER 03 Q#04

// var name, product, quantity, str;
// name = prompt("Enter your name:");
// product = prompt("Enter product title:");
// quantity = prompt("Enter product quantity:");
// str = "<h1>"+ name + " ordered "+ quantity + " " + product + " on XYZ Clothing Store.</h1>"
// document.write(str);

// ================CHAPTER 03 Q#05

// xxxxxxxxxxxxxxxxCHAPTER 03xxxxxxxxxxxxxxxsx




// xxxxxxxxxxxxxxxxCHAPTER 04xxxxxxxxxxxxxxxsx

// ================CHAPTER 04 Q#01

// var name="John", class="Mobile App", day="Sunday";

// ================CHAPTER 04 Q#02

// var name, _last, sun_day, $class, $class_name;
// var 1name, *class, /sunday, class*name;

// ================CHAPTER 04 Q#03

// document.write("<h2>Rules for naming JS variables</h2>")
// document.write("Variable names can only contain numbers, $, alphabet and _")
// document.write("Variables must begin with a letter, $ or _")
// document.write("Variable names are case sensitive")
// document.write("Variable names should not be JS keyword")

// xxxxxxxxxxxxxxxxCHAPTER 04xxxxxxxxxxxxxxxsx



// xxxxxxxxxxxxxxxxCHAPTER 05xxxxxxxxxxxxxxxsx
// x = parseInt(prompt("Enter 1st number:"));
// y = parseInt(prompt("Enter 2nd number:"));
// z = x + y;
// res = "<h2>Sum of " + x + " and " + y + " is " + z + "</h2>";
// document.write(res);

// ================CHAPTER 05 Q#02


// x = parseInt(prompt("Enter 1st number:"));
// y = parseInt(prompt("Enter 2nd number:"));
// z = x + y;
// res = "<h2>Sum of " + x + " and " + y + " is " + z + "</h2>";
// document.write(res);
// z = x - y;
// res = "<h2>Subtraction of " + x + " and " + y + " is " + z + "</h2>";
// document.write(res);
// z = x * y;
// res = "<h2>Multiplication of " + x + " and " + y + " is " + z + "</h2>";
// document.write(res);
// if (y !== 0) {
//     z = x / y;
//     res = "<h2>Division of " + x + " and " + y + " is " + z + "</h2>";
// }
// else {
//     res = "<h2>Division is not possible with 0</h2>"
// }
// document.write(res);
// if (y !== 0) {
//     z = x % y;
//     res = "<h2>Modulus of " + x + " and " + y + " is " + z + "</h2>";
// }
// else {
//     res = "<h2>Modulus is not possible with 0</h2>"
// }
// document.write(res);

// ================CHAPTER 05 Q#03

// var num;
// res = "<h2>Variable after declaration is " + num + "</h2>";
// document.write(res);
// num = 5;
// res = "<h2>Variable after Initialization is " + num + "</h2>";
// document.write(res);
// num++;
// res = "<h2>Value after increment is " + num + "</h2>";
// document.write(res);
// num += 7;
// res = "<h2>Value after adding 7 is " + num + "</h2>";
// document.write(res);
// num--;
// res = "<h2>Value after increment is " + num + "</h2>";
// document.write(res);
// num %= 3;
// res = "<h2>Value after modulus with 3, remainder is " + num + "</h2>";
// document.write(res);

// ================CHAPTER 05 Q#04

// var cost, numberOfTickets, total;
// cost = 600;
// numberOfTickets = 5
// total = cost * numberOfTickets;
// res = "<h2>Cost to buy " + numberOfTickets + " is " + total + "PKR</h2>";
// document.write(res);

// ================CHAPTER 05 Q#05

// var res, num;
// res = "<h2>Table of 4</h2>";
// document.write(res);
// num = 4
// for (let i = 1; i < 11; i++) {
//     res = "<h3>" + num + "x" + i + "=" + num * i + "</h3>";
//     document.write(res);
// }

// ================CHAPTER 05 Q#06

// var C, F;
// C = 25;
// F = (C * 9 / 5) + 32;
// res = "<h3>" + C + "\xB0C is " + F + "\xB0F</h3>";
// document.write(res);
// F = 70;
// C = (F - 32) * 5 / 9;
// res = "<h3>" + F + "\xB0F is " + C + "\xB0C</h3>";
// document.write(res);

// ================CHAPTER 05 Q#07

// var res, priceOf1, priceOf2, qty1, qty2, shipCharges, total;

// priceOf1 = 650;
// document.write("<h2>Price of Item 1 is " + priceOf1 + "</h2>");
// qty1 = 3;
// document.write("<h2>Quantity of Item 1 is " + qty1 + "</h2>");

// priceOf2 = 100;
// document.write("<h2>Price of Item 2 is " + priceOf2 + "</h2>");
// qty2 = 7;
// document.write("<h2>Quantity of Item 2 is " + qty2 + "</h2>");

// shipCharges = 100;
// document.write("<h2>Shipping Charges " + shipCharges + "</h2>");

// res = (priceOf1 * qty1) + (priceOf2 * qty2) + shipCharges;
// document.write("<h2>Total cost of your order is 2750</h2>");

// ================CHAPTER 05 Q#08

// var totalMarks, obtMarks, per;

// totalMarks = 980;
// obtMarks = 804;
// per = (obtMarks / totalMarks) * 100;
// document.write("<h2>Total Marks: " + totalMarks + "</h2>")
// document.write("<h2>Marks Obtained: " + obtMarks + "</h2>")
// document.write("<h2>Percentage: " + per + "%</h2>")

// ================CHAPTER 05 Q#09

// var total;
// total = (10 * 104.80) + (25 * 28);
// document.write("<h2>Total Currency in PKR: " + total + "</h2>")

// ================CHAPTER 05 Q#10

// var num, res;
// num = 5;
// res = ((num + 5) * 10) / 2;
// document.write("<h2>Total: " + res + "</h2>")

// ================CHAPTER 05 Q#11

// var curYear, birthyear, age;
// curYear = 2020;
// birthyear = 1998;
// age = curYear - birthyear;

// document.write("<h2>your age: " + age + "</h2>")

// ================CHAPTER 05 Q#12

// var radius, circumference, area;

// radius = 20;
// circumference = 2 * 3.1415 * radius;
// area = 3.1415 * radius * radius;
// document.write("<h2>Radius of circle: " + radius + "</h2>")
// document.write("<h2>Circumference of circle: " + circumference + "</h2>")
// document.write("<h2>Area of circle: " + area + "</h2>")

// ================CHAPTER 05 Q#13

// var snack, age, maxAge, perDay, total;

// snack = "Lays";
// age = 22;
// maxAge = 65;
// perDay = 2;
// total = (maxAge - age) * 365 * perDay;
// document.write("<h2>Favourite Snack: " + snack + "</h2>")
// document.write("<h2>Current Age: " + age + "</h2>")
// document.write("<h2>Estimated Maximum: " + maxAge + "</h2>")
// document.write("<h2>Amount of snacks per day: " + perDay + "</h2>")
// document.write("<h2>" + total + " " + snack + " to last until age " + maxAge + "</h2>")