//variable
//var
var k = 65;
{
  var k = 75;
  console.log(k)
}
console.log(k)

//let
let j = 65;
j = 8;
{
  let j = 75;
  console.log(j)
}
console.log(j)

//const
const m = 65;
//m=5
{
  m = 75;
  console.log(m)
}
console.log(m)



var number = 23;
var number1 = 22;
console.log(number + number1)
//String
var str = "This is String";
var str1 = "This is another String";
console.log(str)
console.log(str)

//Data types
let j2 = 16 + "volvo"

console.log(j2)

//array
var arr = [1, 2, 'hari', 3, 4, 5]
console.log(arr[2])

// Arithmatic Operators
var a = 22;
var b = 21;
console.log("The value of a+b is ", a + b)
console.log("The value of a-b is ", a - b)
console.log("The value of a*b is ", a * b)
console.log("The value of a/b is ", a / b)

//Assignment Operators
var c = b;
c += 2;
console.log(c);

//Comparison Operator
console.log(a == b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

//Logical OR
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

////Logical And
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

//Function
function avg(a, b) {
  return (a + b) / 2;
}

c1 = avg(4, 6);
c2 = avg(10, 20);
console.log(c1, c2)


function myFunction(a, b) {
  return a * b;
}
let x = myFunction(4, 3);
console.log(x)

//condition
var age = 20;
if (age > 18) {
  console.log('You can Drive');
}
else {
  console.log('you can not Drive')
}

//for Loop
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr)
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

//****************** */

function toCelsius(f, k) {
  return (5 / 9) * (f - 32);
}
let text = "The temperature is " + toCelsius(77) + " Celsius";
console.log(text)



let f = 88;
console.log(f);

function fn(a) {
  //return a
  console.log(a)
}
fn(f)

//*************************************************** */
//Objects
var marks = {
              ravi: 34,
              ram: 20,
              hari: 30,
              govind: 25
            }
console.log(marks.ram)

const car = { type: "Fiat", model: "500", color: "white" };
            car.color = "red";
            car.name = "suzuki"
console.log(car)

const person = {
  firstName: "Smith",
  LastName: "don",
  id: 123,
  FullName: function () {
    return this.firstName + " " + this.LastName;
  }
};
console.log(person.FullName())

var arr1 = [1, 2, 3, 4, 5]
var arr2 = [1, 2, 3, 8, 9]

function Match(arr1, arr2) {
    var arr = [];  // Array to contain match elements
    for (var i = 0; i < arr1.length; ++i) {
        for (var j = 0; j < arr2.length; ++j) {
            if (arr1[i] == arr2[j]) {    // If element is in both the arrays
                arr.push(arr1[i]);        // Push to arr array
            }
        }
    }

   return arr;  // Return the arr elements

}

console.log(Match(arr1, arr2))


  
   

console.log(arrayMatch(arr1, arr2)); // [1, 10, 11, 12, 15, 100]