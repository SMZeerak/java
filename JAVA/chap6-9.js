// ================CHAPTER 06 Q#01

// var a = 10;

// document.write("<h2>Result:</h2>")
// document.write("<h2>---------</h2>")

// document.write("<h2>The value of ++a is: " + (++a) + "</h2>")
// document.write("<h2>Now the value is: " + (a) + "</h2>")

// document.write("<h2>.</h2>")
// document.write("<h2>The value of a++ is: " + (a++) + "</h2>")
// document.write("<h2>Now the value is: " + (a) + "</h2>")

// document.write("<h2>.</h2>")
// document.write("<h2>The value of --a is: " + (--a) + "</h2>")
// document.write("<h2>Now the value is: " + (a) + "</h2>")

// document.write("<h2>.</h2>")
// document.write("<h2>The value of a-- is: " + (a--) + "</h2>")
// document.write("<h2>Now the value is: " + (a) + "</h2>")

// ================CHAPTER 06 Q#02

// var a = 2, b = 1, res;
// res = (--a) - (--b) + (++b) + (b--)
// document.write("<h2>a: " + (a) + "</h2>")
// document.write("<h2>b: " + (b) + "</h2>")
// document.write("<h2>result: " + (res) + "</h2>")

// ================CHAPTER 06 Q#03

// var name = prompt("Enter your name");
// document.write("<h2>Hello! " + (name) + "</h2>")

// ================CHAPTER 06 Q#04

// ================CHAPTER 06 Q#05

// var num;
// num = parseInt(prompt("Enter number for table:"));
// console.log(typeof (num))
// if (isNaN(num)) {
//     num = 5
// }
// for (let i = 1; i < 11; i++) {
//     document.write("<h2>" + (num) + "x" + i + "=" + num * i + "</h2>")
// }

// ================CHAPTER 06 Q#06

// var sub1, sub2, sub3, total, num1, num2, num3, obtTotal, per;

// sub1 = prompt("Enter name for 1st subject");
// sub2 = prompt("Enter name for 2d subject");
// sub3 = prompt("Enter name for 3rd subject");

// total = 300

// num1 = parseInt(prompt("Enter marks for subject " + sub1));
// num2 = parseInt(prompt("Enter marks for subject " + sub2));
// num3 = parseInt(prompt("Enter marks for subject " + sub3));

// obtTotal = num1 + num2 + num3;

// per1 = Math.round((num1 / 100) * 100);
// per2 = Math.round((num2 / 100) * 100);
// per3 = Math.round((num3 / 100) * 100);

// per = Math.round((obtTotal / total) * 100);

// html = `<table><thead><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th><tr></thead>
// <tbody>
// <tr><td>${sub1}</td><td>100</td><td>${num1}</td><td>${per1}%</td></tr>
// <tr><td>${sub2}</td><td>100</td><td>${num2}</td><td>${per2}%</td></tr>
// <tr><td>${sub3}</td><td>100</td><td>${num3}</td><td>${per3}%</td></tr>
// <tr><td colspan=1Ma></td><td>${total}</td><td>${obtTotal}</td><td>${per}%</td></tr>
// </tbody>
// </table>`
// document.write(html)