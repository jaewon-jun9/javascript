//https://codingnuri.com/javascript-tutorial/javascript-undefined.html

// undefined
// 자바스크립트에서 변수를 선언은 했지만 값을 할당하지는 않았거나 존재하지 않은 객체 프로퍼티일 경우 undefined가 반환된다.

// undefined와 null
// 동치 연산자인 ==는 undefined를 null과 동일하다고 간주한다.

let user = {};
console.log(user.name == null); // true
// undefined와 null이 동일한 경우를 구분하고 싶다면 동치 연산자인 ===를 사용한다.

let user1 = {};
console.log(user1.name === null);    // false
// undefined의 변환
// undefined가 불린 연산에서 사용될 경우 거짓으로 변환된다.

console.log(!!undefined);   // false
//undefined가 수치 연산에서 사용될 경우 NaN으로 변환된다.

console.log(1+undefined);   // NaN
//undefined가 문자열 연산에서 사용될 경우 undefined로 변환된다.

console.log(""+undefined);  // undefined
