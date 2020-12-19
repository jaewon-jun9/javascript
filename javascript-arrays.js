//https://codingnuri.com/javascript-tutorial/javascript-arrays.html 자바스크립트 

//배열은 Array() 생성자 함수를 이용해 생성할 수 있다. 다음 예제를 보자.
let array1 = new Array();
array1[0] = "Hello";
array1[1] = 123;
array1[2] = true;
array1[3] = { x:1, y:1 };
console.log(array1.length); // 4
console.log(array1); // [ 'Hello', 123, true, { x: 1, y: 1 } ]
//Array() 생성자에 원소를 전달해서 배열을 초기화할 수 있다. 다음 예제를 보자.
let array2 = new Array("Hello", 123, true, { x:1, y:1 });
console.log(array2.length); // 4
console.log(array2); // [ 'Hello', 123, true, { x: 1, y: 1 } ]
//Array() 생성자에 숫자를 하나만 전달하면 해당 배열의 길이가 정해진다.
let array3 = new Array(12);
console.log(array3.length); // 12
//배열 리터럴을 이용해 배열을 생성할 수 있는데, 배열 리터럴이란 대괄호 안에 담긴, 콤마로 구분된 값의 리스트다. 예를 들어 다음과 같은 식으로 배열 생성하고 초기화할 수 있다.
let array4 = ["Hello", 123, true, ["element1", "element2"]];
console.log(array4.length); // 4
//콤마 사이에 값을 지정하지 않는 식으로 미정의된 원소도 배열 리터럴에 포함할 수 있다. 예를 들어, 다음 배열은 3개의 미정의 값이 포함해서 5개의 원소를 담고 있다.
let array5 = ['a',,,,'e'];
console.log(array5.length); // 5
console.log(array5[1]);     // undefined
//pop() 메서드는 배열에서 마지막 항목을 제거하고 그것을 반환한다.
let languages = ["Java", "JavaScript", "PHP"];
console.log(languages.pop());   // PHP
console.log(languages.length);  // 2
//push() 메서드는 배열의 끝에 원소를 추하고 해당 배열의 길이를 반환한다.
let languages1 = ["Java", "JavaScript"];
console.log(languages1.push("PHP")); // 3
console.log(languages1.length);      // 3
//shift() 메서드는 배열의 첫 번째 항목을 제거하고 그것을 반환한다. unshift() 메서드는 배열의 맨 앞에 원소를 추가하고 해당 배열의 길이를 반환한다.
let languages2 = ["Java", "JavaScript"];
console.log(languages2.shift());         // Java
console.log(languages2.unshift("PHP"));  // 2
//push()와 unshift() 메서드 모두 한번에 여러 원소를 추가할 수 있으며, 둘 다 배열의 길이를 반환한다.
let languages3 = ["Java"];
console.log(languages3.push("JavaScript", "PHP"));   // 3
console.log(languages3.unshift("c++","c"));          // 5
//배열의 모든 원소를 순회할 경우 보통 for 문을 사용한다.
let languages4 = ["Java", "JavaScript", "PHP"];
for (var i=0; languages4.length > i; i++){
    console.log(languages4[i]);
}//결과
//Java
//JavaScript
//PHP

//join() 메서드는 지정한 구분자를 이용해 배열을 문자열로 변환하는 데 사용된다.
console.log(languages4.join(", "));      // Java, JavaScript, PHP
//split() 메서드는 지정한 구분자를 이용해 문자열을 배열로 나누는 데 사용된다.
let languages5 = "Java, JavaScript, PHP";
console.log(languages5.split(", "));     //  ["Java", "JavaScript", "PHP"]
console.log(languages5)
//length 프로퍼티를 설정해 배열을 잘라낼 수 있다.
let languages6 = ["Java", "JavaScript", "PHP"];
console.log(languages6[2]);      // PHP
languages6.length = 2;           // 2개의 원소만 담도록 잘라냄
console.log(languages6[2]);      // undefined
//배열의 길이
//자바스크립트에서 length 프로퍼티는 길이라기보다는 마지막 인덱스에 1을 더한 것이 해당한다.
let languages7 = [];
languages7[1] = "Java";
languages7[3] = "PHP";
console.log(languages7[1])
console.log(languages7[3])
console.log(languages7.length);  // 4
console.log(languages7);         // [undefined, "Java", undefined, "PHP"]
// [ <4 empty items> ] 코드 실행기의 버그인가?
for (var i=0; languages7.length > i; i++){
    console.log(languages7[i]);
} //undefined
//Java
//undefined
//PHP

//배열에서 원소 삭제
//delete를 이용해 배열에서 값을 제거할 수 있으며, 제거한 곳은 undefined가 된다.
let languages8 = ["Java", "JavaScript", "PHP"];
delete languages8[1];
console.log(languages8[1]);      // undefined
console.log(languages8);         // ["Java", undefined, "PHP"]
//[ 'Java', <2 empty items> ] ?????
for (var i=0; languages8.length > i; i++){
    console.log(languages8[i]);
} //Java
//undefined  ?????????????
//PHP  

// 배열의 splice() 메서드
// splice() 메서드는 배열의 원소를 삭제하고 그것들으 대체하는 데 사용된다. 문법은 다음과 같다.

// array.splice(index, deleteCount[, element1, ..., elementN])
// index에서 시작해 deleteCount만큼의 원소를 제거한 후 그곳에 element1, ..., elementN을 붙여넣는다.

// 원소 하나를 제거하는 예제는 다음과 같다.
let languages9 = ["Java", "JavaScript", "PHP"];
languages9.splice(1,1)
console.log(languages9[1]);      // PHP
console.log(languages9);         // ["Java", "PHP"]

// splice() 메서드는 제거된 원소의 배열을 반환하며, 원소를 대체하는 예제는 다음과 같다.

let languages10 = ["Java", "JavaScript", "PHP"];
console.log(languages10.splice(0,2,"c++")); // ["Java", "JavaScript"]
console.log(languages10[0]);      // c++
console.log(languages10);         // ["c++", "PHP"]
// 원소를 집어넣으려면 deleteCount를 0으로 설정하기만 하면 된다.

let languages11 = ["Java", "JavaScript", "PHP"];
languages11.splice(0,0,"c++","c"); // insert
console.log(languages11);     // ["c++", "c", "Java", "JavaScript", "PHP"]
// 인덱스는 음수일 수 있으며, 이 경우 배열의 끝에서부터 센다.
let languages12 = ["Java", "JavaScript", "PHP"];
languages12.splice(-1,0,"c++");   // insert at index -1
console.log(languages12);         // ["Java", "JavaScript", "c++", "PHP"]

//배열의 slice() 메서드
//slice() 메서드는 배열에서 일부분을 추출하는 데 사용된다. 문법은 다음과 같다.
//array.slice(index[, end])
//slice() 메서드는 배열을 변경하지 않으며, 배열의 일부를 반환하기만 한다.

let languages13 = ["Java", "JavaScript", "PHP"];
console.log(languages13.slice(1,2));  // ["JavaScript"]
console.log(languages13);             // ["Java", "JavaScript", "PHP"]
// 배열의 reverse() 메서드
// reverse() 메서드를 사용하는 예제는 다음과 같다.

let languages14 = ["Java", "JavaScript", "PHP"];
languages14.reverse();
console.log(languages14);             // ["PHP", "JavaScript", "Java"]
// 배열의 sort() 메서드
// sort() 메서드를 이용해 배열을 정렬할 수 있으며, sort() 메서드는 모든 것들을 문자열로 변환한 다음 기본적으로 사전순으로 정렬한다. 다음 예제를 보자.

let arr = [2, 1, 15];
arr.sort();
console.log(arr);               // [1, 15, 2]
// 숫자를 기준으로 정렬하려면 직접 정의한 비교 함수를 전달할 필요가 있다. 다음 예제를 보자.

function compare(a,b){
    if (a>b) return 1
    else if (b>a) return -1
    else return 0
}
let arr1 = [2, 1, 15];
arr1.sort(compare);
console.log(arr1);               // [1, 2, 15]
// 다차원 배열
// 배열 안에 또 다른 배열을 저장할 수도 있는데, 다차원 배열을 사용하는 예제는 다음과 같다.
let arr2 = [
    [1,2],
    [3,4]
];
console.log(arr2[1][1]);     // 4
