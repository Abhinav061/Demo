const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
console.log(car)

const car1 = ["Saab", "Volvo", "BMW"];
car1[0] = "Opel";
console.log(car1)

const person = {firstName:"John", lastName:"Doe", age:46};
let person1=person.firstName;
console.log(person1)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
console.log(text)

const fruitss = ["Banana", "Orange", "Apple"];
let type = typeof fruitss;

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let c = fruits1.toString();
console.log(c)

//concate three array
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const arr4 = arr1.concat(arr2, arr3);
console.log(arr4)

//pop push shioft unshift
const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
fruits12.pop();
fruits12.push("don")
fruits12.shift()
fruits12.unshift("kjhbvcx")
console.log(fruits12)

//append delete
const fru = ["Banana", "Orange", "Apple", "Mango"];
let f=fru[fru.length] = "Kiwi";
delete fru[0]
console.log(fru)

//concat
const m = ["Cecilie", "Lone"];
const my = ["Emil", "Tobias", "Linus"];
const myC = m.concat(my);
console.log(myC)

//concate a array with value
const y=["ram","govind"]
let n=y.concat("jhgfd")
console.log(n)

// splice & slice
const s = ["Banana", "Orange", "Apple", "Mango"];
s.splice(2, 0, "Lemon", "Kiwi");
console.log(s)

const ruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = ruits.slice(1);
console.log()

//sort reverse
const man = ["Smith", "Oden", "Anmol", "Manoj"];
man.sort();
man.reverse();
console.log(man)

//sort number
const num = [40, 100, 1, 5, 25, 10];
num.sort(function(h, b){return h - b});
console.log(num)

//sort Random 
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});

//max,
const ark=[14,23,56,45,89]
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
console.log(myArrayMax(ark))

const arkk=[14,23,56,45,89]
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
console.log(myArrayMax(arkk))


const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18)


const numbe = [45, 4, 9, 16, 25];
let sum = numbe.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum)

const numbers1 = [45, 4, 9, 16, 25];
let allOver18 = numbers1.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18)


const fruits11 = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits11.indexOf("Orange") + 1;
console.log(position)


const numbers111 = [4, 9, 16, 25, 29];
let first = numbers111.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first)

const fruit = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruit.keys();

for (let x of keys) {
  text += x 
}
console.log(keys)


const carss = ["Saab", "Volvo", "BMW"];
  {
    const cars = ["kjhgf","Saab", "Volvo", "BMW"];
    console.log(cars)
  }
  console.log(carss)

  const d = new Date();
  console.log(d)

  const d1 = new Date(2018, 5, 35, 10, 33, 30);
  console.log(d1)

  const dd = new Date();
  dd.toISOString();
  console.log(dd)

  let textt = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  textt = "Today is before January 14, 2100.";
} else {
  textt = "Today is after January 14, 2100.";
}
console.log(textt)

let xc=Math.round(4.6);
console.log(xc)

let xc1=Math.ceil(4.1);
console.log(xc1)

let sin=Math.sin(180 * Math.PI / 180);   
console.log(sin)

let ran=Math.random(5);
console.log(ran)

let log1=Math.log2(10);
console.log(log1)

let fg=Math.floor(Math.random() * 11);
console.log(fg)

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
console.log(getRndInteger(10,100))


let day=7;
switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    default:
      day="ohh sry "
}
console.log(day)

const ca = [1, 2, 4, 5, 6, 7];

var text6 =0;
for (var i = 0; i <=ca; i++) {
for (var j=1;j<=ca;j++){ 
  console.log(j)
}
text6 += ca[i] +""+ ca[j];
}
console.log(text6)