var str1 = 50 + " meters";  // 50 meters
var str2 = 50 + "";
console.log(str1);           // NaN
console.log(str2); 
var number1 = 500;
var string1 = number1.toString();
console.log(number1.length);    // undefined
console.log(string1.length);    // 3
console.log("50"*"5");  // 250
console.log(+"50");     // 50
console.log(+" 50 ");   // 50, 숫자 앞과 뒤의 공백은 무시됨
console.log("50"-0);    // 50
console.log(+"50abc");  // NaN, 숫자로 변환할 수 없음
console.log(isFinite(1/0));     // false
console.log(isFinite(-1/0));    // false
console.log(isFinite("a"));     // false
console.log(isFinite(NaN));     // false
console.log(isFinite(1));       // true
var number1 = 1;            
var number2 = 0;            
var number3 = 999999999;    
var number4 = 0xff;

var number6 = 3.14159265;
var number7 = 5e5;      // 과학적 표기법
var number8 = 5E-5;     // 과학적 표기법
console.log("number1 = " + number1);
console.log("number2 = " + number2);
console.log("number3 = " + number3);
console.log("number4 = " + number4);
console.log("number6 = " + number6);
console.log("number7 = " + number7);
console.log("number8 = " + number8);
