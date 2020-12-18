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
var languages3 = ["Java"];
console.log(languages3.push("JavaScript", "PHP"));   // 3
console.log(languages3.unshift("c++","c"));          // 5
//배열의 모든 원소를 순회할 경우 보통 for 문을 사용한다.
var languages4 = ["Java", "JavaScript", "PHP"];
for (var i=0; languages4.length > i; i++){
    console.log(languages4[i]);
}//결과
//Java
//JavaScript
//PHP

//join() 메서드는 지정한 구분자를 이용해 배열을 문자열로 변환하는 데 사용된다.
console.log(languages4.join(", "));      // Java, JavaScript, PHP
