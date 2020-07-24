// ================ Q#1

// var students = [];

// ================ Q#2

// var students = {};

// ================ Q#3

// var str = [];
// str[0] = 'dog';
// str[1] = 'cat';
// str[2] = 'lion';

// ================ Q#4

// var num = [];
// num[0] = 546;
// num[1] = 789;
// num[2] = 132;

// ================ Q#5

// var bool = [];
// bool[0] = true;
// bool[1] = false;

// ================ Q#6

// var mxd = [];
// mxd[0] = 'asd';
// mxd[1] = 'dsad';
// mxd[2] = 1233;
// mxd[3] = true;

// ================ Q#7

// var qual = ['SSC', 'HSC', 'BSc', "BCS", 'BCOM', 'MS', 'M. Phil.', 'PhD'];
// for (var i in qual) {
//     document.write(`<p>${qual[i]}</p>`)
// }

// ================ Q#8

// var students = ['Ahmed', 'Arsalan', 'Abdullah'];
// var marks = [320, 230, 480];
// for (var i in students) {
//     document.write(`<p>Score of ${students[i]} is ${marks[i]}. Percentage: ${(marks[i] / 500) * 100}%</p>`);
// }

// ================ Q#9

// var colors = ['red', 'green', 'blue', 'yellow', 'pink'];
// document.write(`<p>${colors}</p>`);
// var newColor = prompt("What color do you want to add?");
// colors.unshift(newColor);
// document.write(`<p>${colors}</p>`);
// newColor = prompt("What color do you want to add?");
// colors.push(newColor);
// newColor1 = prompt("What color do you want to add?");
// newColor2 = prompt("What color do you want to add?");
// colors.unshift(newColor1, newColor2);
// document.write(`<p>${colors}</p>`);
// colors.shift();
// document.write(`<p>${colors}</p>`);
// colors.pop();
// document.write(`<p>${colors}</p>`);
// var index = parseInt(prompt("At which index you want add color?"));
// colors[index] = 'magenta';
// document.write(`<p>${colors}</p>`);
// index = parseInt(prompt("At which index you want delete color?"));
// var index2 = parseInt(prompt("How many color you want to delete?"));
// colors.splice(index, index2);
// document.write(`<p>${colors}</p>`);

// ================ Q#10

// var scores = [320, 230, 480, 120];
// document.write(`<p>${scores}</p>`);
// scores.sort()
// document.write(`<p>${scores}</p>`);

// ================ Q#11

// var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
// document.write(`<p>${cities}</p>`);
// var selectedCities = cities.slice(2, 4)
// document.write(`<p>${selectedCities}</p>`);

// ================ Q#12

// var arr = ['This', 'is', 'my', 'cat']
// document.write(`<p>${arr}</p>`);
// var st = arr.join(' ');
// document.write(`<p>${st}</p>`);

// ================ Q#13

// var arr = [];
// arr.push('keyboard');
// arr.push('mouse');
// arr.push('printer')
// arr.push('monitor')
// document.write(`<p>${arr}</p>`);
// document.write(`<p>${arr[0]}</p>`);
// document.write(`<p>${arr[1]}</p>`);
// document.write(`<p>${arr[2]}</p>`);
// document.write(`<p>${arr[3]}</p>`);


// ================ Q#14

// var arr = [];
// arr.push('keyboard');
// arr.push('mouse');
// arr.push('printer')
// arr.push('monitor')
// document.write(`<p>${arr}</p>`);
// document.write(`<p>${arr[arr.length - 1]}</p>`);
// document.write(`<p>${arr[arr.length - 2]}</p>`);
// document.write(`<p>${arr[arr.length - 3]}</p>`);
// document.write(`<p>${arr[arr.length - 4]}</p>`);

// ================ Q#15

// var arr = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Hair'];
// document.write('<select>');
// for (var i in arr) {
//     document.write(`<option>${arr[i]}</option>`);
// }
// document.write('</select>');

//chap 17 -20
// ================ Q#1

// var mulDimArr = [[]];

// ================ Q#2

// var mulDimArr = [[0, 1, 2, 3], [1, 0, 1, 2], [1, 0, 1, 2], [2, 1, 0, 1]];

// ================ Q#3

// for (var i = 1; i <= 10; i++) {
//     document.write(`<p>${i}</p>`)
// }

// ================ Q#4

// var table, len;
// table = Number(prompt("Enter number to print it's multiplication table"));
// len = Number(prompt("Enter the length of multiplication table"));
// for (let index = 1; index <= len; index++) {
    // document.write(`<p>${table} x ${index} = ${table*index}</p>`)
// }

// ================ Q#5

// var arr = ["apple", "bnana", "mango", "orange", "strawberry"];
// for (var i in arr) {
    // document.write(`<p>${arr[i]}</p>`)
// }

// ================ Q#6

// for (var i = 1; i <=15; i++) {
//     document.write(`<p>${i}</p>`)

// }
// for (var i = 10; i >0; i--) {
//     document.write(`<p>${i}</p>`)

// }

// for (var i = 0; i <= 20; i+=2) {
//     document.write(`<p>${i}</p>`)
    
// }
// for (var i = 1; i <= 19; i+=2) {
//     document.write(`<p>${i}</p>`)
    
// }
// for (var i = 2000; i <= 20000; i+=2000) {
    // document.write(`<p>${i}</p>`)
    
// }

// ================ Q#7

// var item = ['bun', 'pastery', 'juice', 'butter'];
// var search = prompt("Search in the bakery item");
// if (item.indexOf(search) !== -1) {
//     i = item.indexOf(search);
    // document.write(`<p>${search} is available at index ${i}</p>`);
// }else {
    // document.write(`<p>Sorry this item is not available</p>`);
// }

// ================ Q#8

// var A = [24, 53, 78, 91, 12];
// var l=A[0];
// for (var i in A) {
//     if (A[i] > l) {
//         l = A[i];
//     }
// }
// document.write(`<p>${l}</p>`);

// ================ Q#9

// var A = [24, 53, 78, 91, 12];
// var l=A[0];
// for (var i in A) {
//     if (A[i] < l) {
//         l = A[i];
//     }
// }
// document.write(`<p>${l}</p>`);

// ================ Q#10

// var A = [];

// for (var i = 5; i <= 100; i+=5) {
//     A.push(i)
// }
// document.write(`<p>${A}</p>`);