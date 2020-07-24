// ================ Q#01

// var firstName, secondName;

// firstName = prompt("Enter your first name:");
// secondName = prompt("Enter your last name:");
// document.write(`<p>First Name: ${firstName}</p>`);
// document.write(`<p>Last Name Name: ${secondName}</p>`);
// document.write(`<p>Full Name Name: ${firstName} ${secondName}</p>`);

// ================ Q#02

// var model;
// model = prompt("Enter your favourite phone:");
// document.write(`<p>My favourite model: ${model}</p>`);
// document.write(`<p>Length: ${model.length}</p>`);

// ================ Q#03

// var str = 'Pakistani';
// document.write(`<p>String: ${str}</p>`);
// document.write(`<p>index of 'n': ${str.indexOf('n')}</p>`);

// ================ Q#04

// var str = 'Hello World';
// document.write(`<p>String: ${str}</p>`);
// document.write(`<p>index of 'n': ${str.lastIndexOf('l')}</p>`);

// ================ Q#05

// var str = 'Pakistani';
// document.write(`<p>String: ${str}</p>`);
// document.write(`<p>Char of index '3': ${str[3]}</p>`);

// ================ Q#06

// var firstName, secondName, fullName;

// firstName = prompt("Enter your first name:");
// secondName = prompt("Enter your last name:");
// fullName = firstName.concat(' ', secondName);
// document.write(`<p>First Name: ${firstName}</p>`);
// document.write(`<p>Last Name Name: ${secondName}</p>`);
// document.write(`<p>Full Name Name: ${fullName}</p>`);

// ================ Q#07

// var city = 'Hyderabad', rep;
// document.write(`<p>City : ${city}</p>`);
// rep = city.replace('Hyder', 'Islam');
// document.write(`<p>After replacement : ${rep}</p>`);

// ================ Q#08

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// document.write(`<p>${message}</p>`);
// message = message.replace(/and/g, '&');
// document.write(`<p>${message}</p>`);

// ================ Q#09

// var str = '472';
// document.write(`<p>Val: ${str}</p>`);
// document.write(`<p>Type: ${typeof (str)}</p>`);
// var num = Number(str);
// document.write(`<p>val: ${num}</p>`);
// document.write(`<p>Type: ${typeof (num)}</p>`);

// ================ Q#10

// var input = prompt("Enter string");
// document.write(`<p>string: ${input}</p>`);
// document.write(`<p>upper case: ${input.toUpperCase()}</p>`);

// ================ Q#11

// var input = prompt("Enter string");
// document.write(`<p>string: ${input}</p>`);
// var res = input.replace(input[0], input[0].toUpperCase());
// document.write(`<p>upper case: ${res}</p>`);

// ================ Q#12

// var num = 35.36;
// document.write(`<p>Nmber: ${num}</p>`);
// var stri = num.toString().split('.');
// strin = stri[0].concat(stri[1]);
// document.write(`<p>Result: ${strin}</p>`);

// ================ Q#13

// var username;

// username = prompt("Enter your first name:");
// for (var i = 0; i < username.length; i++) {
//     if (username[i].charCodeAt(0) === 33 || username[i].charCodeAt(0) === 44 || username[i].charCodeAt(0) === 46 || username[i].charCodeAt(0) === 64) {
//         alert("please enter a valid username");
//         break;
//     }
// }

// ================ Q#14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var item = prompt("Welcome to the Bakery! \n What do you want to but?:");
// var isItem = A.indexOf(item.toLowerCase());
// if (isItem !== -1) {
//     alert(`${item} is available at ${isItem} index`)
// }
// else {
//     alert(`${item} is not available ${isItem} ${re}`)
// }

// ================ Q#15

// var password = prompt("Enter password:");
// for (var i in password) {
//     if (password[0].charCodeAt(0) >= 48 && password[0].charCodeAt(0) <= 57) {
//         alert("Password can not begin with number");
//         break;
//     }
//     if ((password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0)) || (password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90) || (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57)) {
//         continue;
//     } else {
//         alert("Please Enter a valid password");
//         break
//     }
// }

// ================ Q#16

// var university = "University of Karachi";
// var arr = []
// for (var i in university) {
//     arr.push(university[i]);
// }
// for (var i in arr) {
// document.write(`<p>${arr[i]}</p>`);

// }

// ================ Q#17

// var input = prompt("Enter password:");
// document.write(`<p>User Input: ${input}</p>`);
// document.write(`<p>Last Character: ${input[input.length - 1]}</p>`);

// ================ Q#18

// var str = "“The quick brown fox jumps over the lazy dog"
// var count = (str.match(/the/gi) || []).length;
// document.write(`<p>Text: ${str}</p>`);
// document.write(`<p>There are ${count} occurences if word 'the'</p>`);

//chap 26-30

// ================ Q#1

// var num = Number(prompt("Enter any number"));
// document.write(`<p>number: ${num}</p>`)
// document.write(`<p>round off value: ${Math.round(num)}</p>`)
// document.write(`<p>floor value: ${Math.floor(num)}</p>`)
// document.write(`<p>ciel value: ${Math.ceil(num)}</p>`)

// ================ Q#2

// var num = Number(prompt("Enter any number"));
// document.write(`<p>number: ${num}</p>`)
// document.write(`<p>round off value: ${Math.round(num)}</p>`)
// document.write(`<p>floor value: ${Math.floor(num)}</p>`)
// document.write(`<p>ciel value: ${Math.ceil(num)}</p>`)

// ================ Q#3

// var num = Number(prompt("Enter any number"));
// num = Math.abs(num);
// document.write(`<p>absolute value: ${num}</p>`)

// ================ Q#4

// var dice = Math.floor(Math.random() * 6) + 1;
// document.write(`<p>random dice: ${dice}</p>`)

// ================ Q#5

// var dice = Math.floor(Math.random() * 2) + 1;
// var coin = dice === 2 ? "Head" : "Tails"
// document.write(`<p>${dice} ${coin}</p>`)

// ================ Q#6

// var rand = Math.floor(Math.random() * 100) + 1;
// document.write(`<p>${rand}</p>`)