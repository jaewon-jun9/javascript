//https://codingnuri.com/javascript-tutorial/javascript-undefined.html

// 자료형 검사
// 자바스크립트에서는 문자열, 숫자, 불린, null, undefined와 같은 다수의 원시 자료형이 있다. 나머지 모든 값은 객체다.

// typeof 연산자
// typeof 연산자는 값을 받아 그것의 자료형을 반환한다. typeof의 두 가지 문법은 다음과 같다.

// typeof value    //  단항 연산자
// typeof(value)   //  함수 형태
// typeof 연산자는 피연산자가 숫자, 문자열, 불린값일 경우 각각 "number", "string", "boolean"으로 평가된다.

console.log(typeof 123);    // number
console.log(typeof '123');  // string
console.log(typeof false);  // boolean
console.log(typeof NaN);    // number, 'Not-A-Number'는 숫자다!
//객체, 배열, Number, String, Boolean, Date, null은 모두 "object"로 평가된다.

console.log(typeof {});             // object
console.log(typeof []);             // object
console.log(typeof new Number(0));  // object
console.log(typeof new String('h'));// object
console.log(typeof new Boolean(1)); // object
console.log(typeof new Date());     // object
console.log(typeof null);           // object, null은 객체 타입이다!
//피연산자가 함수이면 "function"으로 평가된다.

console.log(typeof function(){});   // function
//피연산자가 undefined이면 "undefined"로 평가된다.

let user = {};
console.log(typeof user.name);  // undefined
console.log(typeof undefined);  // undefined
// typeof 연산자는 원시 타입을 구분할 때만 유용하고 객체는 구분하지 못한다. 객체를 구분하기 위해서는 instanceof 연산자를 사용할 수 있다.

// instanceof 연산자
// 직접 정의한 객체의 경우 instanceof 연산자를 이용해 타입을 검사할 수 있다.
 
function User(name){
    this.name = name;
}
let user1 = new User("Jerry");
console.log(user1 instanceof User);     // true
