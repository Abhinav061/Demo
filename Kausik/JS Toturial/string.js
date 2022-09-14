let a="asghjklqwertyuiop"
let b=a.length;
console.log(b)

let text = "code is life  \"Vikings\" for every coder.";
console.log(text)

let text1= 'It\'s alright.';
console.log(text1)

let text2="asgh\fjklqwert\byuiop"
console.log(text2)



let x = new String("John");  // x is an object
let y = new String("John");  // y is an object
console.log(x==y);

let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -2);
console.log(part)

let text3 = "Hello World!";
let text4 = text3.toUpperCase();
console.log(text4)


let text5 = "Hello";
let text6 = "World";
let text7 = text5.concat(" ", text6);
console.log(text7)

let text8 = "      Hello World!      ";
let text9 = text8.trim();
console.log(text9)

let numb = 5;
let te = numb.toString();
let padded = te.padStart(4,"k");
console.log(padded)


let tex = "a bd e f";
const myArray = tex.split(" ");
console.log(myArray)

let str1 = "Please locate where 'locate' occurs!";
let str2=str1.indexOf("locate")
console.log (str2)

let t = `Hello Wo"r"ld!`;
console.log(t)

let firstName = "John";
let lastName = "Doe";

let t1 = `Welcome ${firstName} ${lastName}!`;
console.log(t1)

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total)

let x1 = 999999999999999;  
let y1= 9999999999999999; 
console.log(x1)
console.log(y1)

let x2 = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x2)

let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  console.log(myNumber)
}

let x5 =  -2 / 0;
console.log(x5)

let xi = 0xFF;
console.log(xi)