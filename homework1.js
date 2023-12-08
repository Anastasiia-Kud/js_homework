var number1 = 3;
var number2 = 3;
var res = number1 + number2;
consol.log(res); 
// result is 6

var number1 = null;
var number2 = 3;
var res = number1 + number2;
console.log(res);
// result is 3

var value1 = 5;
var value2 = "qwerty";
var res = value1 && value2
console.log(res);
// result is true

var value1 = '40';
var value2 = '2';
var value3 = "hillel";
var res = +value1+(+value2)+ value3;
console.log(res);
//result is 42 hillel

var value1 = '10';
var value2 = 5;
var value3 = 6;
var res1 = value1 - value2;
var res = res1 === value3;
consol.log(res);
// result is false

var value1 = true;
var value2 = false;
var res = value1 + value2;
consol.log(res);
// result is 1

var value1 = '4px';
var value2 = 3;
var res = value1 - value2;
console.log(res);
// result is NaN

var value1 = '4';
var value2 = 3;
var res = value1 - value2;
console.log(res);
// result is 1

var value1 = '6';
var value2 = 3**0;
var res = value1 + value2;
console.log(res);
// result is 7

var value1 = 12;
var value2 = '6';
var res = value1 / value2;
console.log(res);
// result is 2

var value1 = '10';
var value2 = 5;
var value3 = 6;
var res1 = value2 === value3;
var res = value1 + res1;
console.log(res);
// result is 10

var value1 = null;
var value2 = '';
var res = value1 == value2;
console.log(res);
// result is true

var value1 = 3;
var value2 = 9;
var value3 = 3;
var res1 = value2 / value3;
var res = value1**res1;
console.log(res);
// result is 27

var value1 = 'false';
var value2 = 'true';
var res = !!value1 == !!value2;
console.log(res);
// result is false ????

var value1 = 0;
var value2 = '0';
var value3 = 1;
var res = value1 || value2 && value3;
console.log(res);
// result is false

var value1 = null;
var value2 = false;
var value3 = 1;
var res1 = +value1 == value2;
var res = res1 < value3;
console.log(res);
// result is false

var value1 = false;
var value2 = true;
var value3 = true;
var res = value1 && value2 || value3;
console.log(res);
// result is true

var value1 = false;
var value2 = false;
var value3 = true;
var res = value1 && (value2 || value3);
console.log(res);
// result is false

var value1 = null;
var value2 = false;
var value3 = 1;
var res1 = +value1 == value2;
var res = res1 < value3**5;
console.log(res);
// result is true
