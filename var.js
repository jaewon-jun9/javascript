// 변수 선언과 유효범위
// 자바스크립트에서 변수는 값과 연관된 이름으로서, 변수를 이용하면 자바스크립트 프로그램에서 데이터를 저장하고 조작할 수 있다.

// 변수 선언
// 변수는 var 키워드로 선언한다.

// 동일한 var 키워드를 이용해 여러 개의 변수를 선언할 수 있으며, 변수를 선언함과 동시에 초기화할 수도 있다. 다음 예제를 보자.

let x;
let y = 10;
let a, b, c;
let i = 10, j = 10, k = 10; 
//변수에 초기값을 지정하지 않으면 해당 초기값은 undefined가 된다.

let z;
console.log(z);     //undefined
// 자바스크립트에는 명시적인 타입이 없다
// 자바스크립트는 다른 자바나 C 같은 어어와 달리 명시적인 타입이 없다. 자바스크립트 변수는 어떤 자료형의 값도 담을 수 있으며, 한 변수를 다른 타입의 값으로 할당할 수 있다.

let id = 10;    // number
id = "ten";     // string
console.log(id);    // ten
// 변수의 전역 유효범위와 지역 유효범위
// 자바스크립트 변수 유효범위는 변수를 어디에서 접근할 수 있느냐를 가리킨다.

// 전역 유효범위는 코드 내에서 어디서든 변수에 접근할 수 있음을 의미한다.
// 지역 유효범위는 함수 내에서 변수를 정의하고 접근할 수 있음을 의미한다.
// 함수 매개변수도 지역 변수로 간주하며 해당 함수의 본문 내에서 접근할 수 있다.
// 지역 변수와 전역 변수의 이름이 같을 경우 지역 변수가 우선순위가 높다.
// 전역 변수와 지역 변수의 예는 다음과 같다.
 
let name = "global";    // 전역 변수를 선언
function checkscope(){  
    let name = "local"; // 지역 변수를 선언
    console.log(name);  // 전역 변수가 아닌 지역 변수를 사용
}
checkscope();           // 출력 결과: "local"          
//키워드 없이 변수를 선언하면 자동으로 전역 변수가 된다.

// var name1 = "global";    // 전역 변수를 선언
// function checkscope(){  
//     name1 = "local";     // 전역 변수를 변경
//     name2 = "local";    // 암묵적으로 새 전역 변수가 선언됨
// }
// checkscope();
// console.log(name1);      // output: "local" 
// console.log(name2);     // output: "local" 

 
// 참고: 모든 변수를 var 키워드로 선언한다.

// 중첩 함수에서 내부 함수는 그것이 담긴 함수의 변수에 접근할 수 있다.

function changeName(name3){          // "name"은 지역 변수다
    function inner1(){
        name3 = name3 + "-inner1";     
        function inner2(){
            name3 = name3 + "-inner2";
        }
        inner2();
    }
    inner1();
    return name3;
}
console.log(changeName("Hello"));   // Hello-inner1-inner2
// 자바스크립트에는 블록 유효범위가 없다
// 다른 자바나 C 같은 언어와 달리 블록({}) 안에서 선언된 변수는 해당 블록이 닫힌 이후에도 접근할 수 있다. 다음 예제를 보자.

{
    var count = 10;
}
console.log(count);     // 10
//아울러 반복문 내에서 선언된 변수도 해당 반복문이 끝난 이후에 접근할 수 있다.

for (let i=0; i<11; i++){}
console.log( i );       // 11