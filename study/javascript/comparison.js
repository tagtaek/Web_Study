let num1=7;
let num2=9;
let data = '7'

console.log(num1 < num2); // true
console.log(num1 <= num2); // true

//추상적(abstract) 비교: 데이터형이 달라도 모양만 같으면 됨
//엄격한(strict) 비교: 데이터형까지 같아야 함
console.log(num1 == data); // true
console.log(num1 === num2); // false

console.log(num1 != data); // false
console.log(num1 !== data); // true
