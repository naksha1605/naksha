//var a = 5;
//var b = 8;
//console.log(a)
//console.log(b)
//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(a < b)
//console.log(a > b)
//console.log(a = b)
//function add() {
//  var a = 5;
//  var b = 10;
//  console.log(a + b)
//}
//add()
//function add(a, b) {
//   console.log(a + b)
//}
//add(20, 30)
//add(50, 30)
//add(10, 30)
//var a = 5
//var b = '5'
//console.log(a == b)
//
//var a = 29;
//var b = 30;
//console.log(`${a} +${b} = ${a + b}`)
//n = 45
//if (n % 2 == 0) {
//   console.log('even')
//}
//else {
//  console.log('odd')
//}
//for (n = 1; n <= 1; n++) {
//    if (n % 2 == 0) {
//        console.log(`${n}is even`)
//  }
//
//}
//n = 10
//var result = (n % 2 === 0) ? "even" : "odd"
//console.log(result)
//n = 10;
//sum = 1;
//if (n % 2 == 0) {
//    console.log(`${sum + n}is even`)
//}
//var arr = [10, 20, 30, 40, 50, 60]
//for (var index in arr) {
//    console.log(index)
//}
//
//for (var key of arr) {
//    console.log(key)
//}
var obj = { name: "sri", dept: "computer science" }
for (var key in obj) {
    console.log(key)
    console.log(obj[key])
}
var arr = [1, 2, 3, 4, 5]

var arr2 = [...arr, 6, 7, 8]
console.log(arr2)
//destruturing operator
var marks = [90, 99, 97, 98, "fail"]
var [m1, m2, m3, m4, m5] = marks;
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)
//callback function
function saybye() {
    console.log("bye")
}
function demo(name, callback) {
    console.log("hello " + name)
    callback()
}
demo("sri", saybye)
const btn = document.getElementById("btn1");
btn.onclick = function () {
    window.open("https://www.instagram.com/")
    alert("welcome to instagram")
}





