// ================ Q#1

// document.write(`<p><a href="javascript:void(0)" onclick="alert('you have clicked a link')">Link to show alert box</a></p>`)

// ================ Q#2

// document.write(`<img src="images/photo-1511707171634-5f897ff02aa9.jpeg" alt="mob1"onclick="alert('Thank you for purchasing our product')" width="200px"><img src="images/2.jpg" alt="mob2" onclick="alert('Thank you for purchasing our product')">`)

// ================ Q#3

// function writeHtml() {
//     document.write(`<table>`)

//     document.write(`<thead>`)

//     document.write(`<tr><th>Roll No.</th><th>Name</th><th>Action</th></tr>`)

//     document.write(`</thead>`)
//     document.write(`<tbody id='table'>`)

//     for (var i = 0; i < 10; i++) {
//         document.write(`<tr id='${i}'><td>${i}</td><td>Student${i}</td><td><button onclick='deleteRow(${i})'>Delete</button></td></tr>`)
//     }

//     document.write(`</tbody>`)

//     document.write(`</table>`)
// }

// function deleteRow(i) {
//     var row = document.getElementById(i);
//     document.getElementById(i).parentNode.removeChild(row)
// }

// function init() {
//     writeHtml();
// }
// init();

// ================ Q#4

// document.write(`<img src="images/photo-1511707171634-5f897ff02aa9.jpeg" alt="mob1" onMouseout="src='images/photo-1511707171634-5f897ff02aa9.jpeg'" onMouseover="src='images/2.jpg'" width="200px">`)

// ================ Q#5

// document.write(`<p>Counter: <span id="counter">0</span></p><button onclick="inc()">increase</button><button onclick="dec()">decrease</button>`);

// function inc() {
//     var sp = document.getElementById('counter');
//     var num = Number(sp.textContent);
//     num++;
//     sp.textContent = num;
// }
// function dec() {
//     var sp = document.getElementById('counter');
//     var num = Number(sp.textContent);
//     num--;
//     sp.textContent = num;
// }

//chap49 - 52

// ================ Q#1

// function createForm() {
//     document.write(`<form action="#" onsubmit="submitForm()">
//     <input id="name" type="text" placeholder="Name">
//     <input id="username" type="text" placeholder="Username">
//     <input id="password" type="text" placeholder="Password">
//     <input type="submit" value="Submit" >
// </form><div id="divF"></div>`);
// }

// function submitForm() {
//     var name = document.getElementById('name').value;
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     var div = document.getElementById('divF');
//     div.innerHTML += `<p>name: ${name}</p>`;
//     div.innerHTML += `<p>username: ${username}</p>`;
//     div.innerHTML += `<p>password: ${password}</p>`
//     // document.write(`name: ${name}, username: ${username}, password: ${password}`);
// }

// createForm();

// ================ Q#2

// document.write(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
// Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
// <span id="dots">...
// </span><span id="more" style="display:none;">erisque enim ligula venenatis dolor.
//  Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. 
//  Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. 
//  In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
// <button onclick="myFunction()" id="myBtn">Read more</button>`);
// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// ================ Q#3

// function submitForm() {
//     var name = document.getElementById('name').value;
//     var classN = document.getElementById('class').value;
//     var rollNumber = document.getElementById('rollNumber').value;
//     var div = document.getElementById('divF');
//     var table = document.getElementById('table');
//     var form = document.getElementById('form');
//     var row = (`<tr id='${rollNumber}'><td>${name}</td><td>${classN}</td><td>${rollNumber}</td><td><button onclick='deleteRow(${rollNumber})'>Delete</button></td></tr>`);
//     table.insertAdjacentHTML('beforeend', row)
//     form.reset();
//     // document.write(`name: ${name}, username: ${username}, password: ${password}`);
// }

// function createForm() {
//     document.write(`<form action="#" onsubmit="submitForm()" id="form">
//     <input id="name" type="text" placeholder="Name">
//     <input id="class" type="text" placeholder="Class">
//     <input id="rollNumber" type="text" placeholder="Roll Number">
//     <input type="submit" value="Submit" >
// </form><div id="divF"></div>`);
// }

// function writeHtml() {
//     document.write(`<table>`)

//     document.write(`<thead>`)

//     document.write(`<tr><th>Name</th><th>Class</th><th>Roll Number</th><th>Action</th></tr>`)

//     document.write(`</thead>`)
//     document.write(`<tbody id='table'>`)


//     document.write(`</tbody>`)
//     document.write(`</table>`)
// }

// function deleteRow(i) {
//     var row = document.getElementById(i);
//     document.getElementById(i).parentNode.removeChild(row)
// }

// function init() {
//     createForm();
//     writeHtml();
// }
// init();