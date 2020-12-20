//https://codingnuri.com/javascript-tutorial/javascript-null.html
// null
// 자바스크립트에서 null은 값이 없을 나타내는 특별한 자료형으로서 객체가 없음을 나타내는 특별한 값이다.

// null의 변환
// null이 불린 연산에서 사용될 경우 거짓으로 변환된다.
console.log(!!null);    // false
// null이 수치 연산에서 사용될 경우 0으로 변환된다.
console.log(1+null);    // 1
// null이 문자열 연산에서 사용될 경우 null로 변환된다.
console.log(""+null);   // null
