# div 오버플로우시 스크롤바 처리

style = "overflow:scroll"   > 스크롤바 상시 생김

style = "overflow:auto"  > 오버플로우 시에만 스크롤바 생김

style = "overflow:hidden"  >  스크롤바 미표시 넘친 컨텐츠 숨김

overflow-y:scroll > y축에 대하여 스크롤바 상시 생김



컨텐츠는 스크롤가능하게 하고 스크롤바 숨기기

```html
<style>
    .item {
        cursor: pointer;
    }

    .box{ -ms-overflow-style: none; } 
    .box::-webkit-scrollbar{ display:none; }
</style>
<div class="box" style="height:298px; width:670px; overflow-y:auto;"> 
.
.
.
</div>

```



# JS Array 이해, push(), pop(), sort(), splice()

[JS Array 이해, push(), pop(), sort(), splice() | TutorialPost (apptilus.com)](https://tutorialpost.apptilus.com/code/posts/js/js-array/) 에서 가져옴

## 배열의 메서드

배열은 자바스크립트에서 데이터를 처리할 때 가장 폭넓게 사용되는 데이터 타입의 하나입니다. 따라서 손쉽게 배열을 조작할 수 있도록 다양한 메서드를 제공하고 있습니다.

### Array 메서드

Array.from()

유사 배열 혹은 반복가능한 객체로부터 새 Array 인스턴스를 만듭니다.

```js
Array.from(arrayLike[, mapFn[, thisArg]])
```

이 메서드를 이용하면 함수의 arguments를 배열로 손쉽게 변경할 수 있습니다.

```js
function f() {
  var args = Array.from(arguments);
  console.log(args);
}

f(1, 2, 3);  // [ 1, 2, 3 ]
```

Array.isArray()

인자로 전달받은 객체가 배열이면 true, 그렇지 않으면 false를 리턴하여 해당 객체가 배열인지 확인 합니다.

```js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
```

## 원본 배열을 수정하는 메서드

아래의 메서드들은 원본 배열을 바로 수정하는 메서드들 입니다. 따라서 사용에 주의해야 하며, 원본 데이터의 변경 없이 배열 조작의 결과값이 필요할 경우에는 다른 메서드들을 사용해야 합니다.

### 배열 요소 추가 제거 메서드

배열의 처음 혹은 마지막에 요소를 추가하거나 제거하는 메서드들 입니다.

- push 메서드 : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
- pop 메서드 : 배열의 마지막 요소를 제거한 후, 제거한 요소를 반환
- unshift 메서드 : 배열의 첫 번째 자리에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
- shift 메서드 : 배열의 첫 번째 요소를 제거한 후, 제거한 요소를 반환

```js
var arr = [1, 2, 3];

// 배열의 마지막 요소 제거, 제거된 요소 리턴
arr.pop();  // 3

// 배열 마지막에 요소 추가, 배열의 크기 리턴
arr.push("new");  // 3
console.log(arr);  //-> [ 1, 2, 'new' ]

// 배열의 첫번째 요소 제거, 제거된 요소 리턴
arr.shift();  // 1

// 배열의 처음에 요소 추가, 배열의 크기 리턴
arr.unshift("new");  // 3
console.log(arr);  //-> [ 'new', 2, 'new' ]
```

### splice 메서드 - 배열 요소 추가 삭제

Array.prototype.splice() 메서드는 배열의 특정 위치에 배열 요소를 추가하거나 삭제하는데 사용합니다. 리턴값은 삭제한 배열 요소입니다. 삭제한 요소가 없더라도 빈 배열을 반환합니다.

```js
/* 배열 임의의 위치에 요소 추가 제거 */
// start - 수정할 배열 요소의 인덱스
// deleteCount - 삭제할 요소 개수, 제거하지 않을 경우 0
// el - 배열에 추가될 요소
arr.splice(start, deleteCount, el);


var arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4);  // [], arr: [1, 2, 3, 4, 5, 7]
arr.splice(1, 2);           // [2, 3], arr: [1, 4, 5, 7]
```

### reverse 메서드 - 배열 요소 순서 반전

Array.prototype.reverse() 메서드는 배열 요소의 순서를 뒤집습니다.

```js
// 요소 순서를 반전 시킴
var arr = [1, 3, 5, 7];
arr.reverse();  // [7, 5, 3, 1]
```

### sort 메서드 - 배열 요소 정렬

Array.prototype.sort() 메서드는 배열 내부의 요소를 정렬하는데 사용합니다.

sort 함수는 기본적으로 배열의 요소를 문자열로 변환한 후 오름차순으로 정렬합니다.

```js
var arr = [11, 1, 115, 42, 12];
arr.sort();    //-> [ 1, 11, 115, 12, 42 ]
```

이렇게 사용할 경우 위 예제와 같이 의도하지 않은 결과를 돌려줄 경우가 있습니다. 이는 내부적으로 숫자를 문자열로 변환한 후 값을 비교하기 때문입니다.

따라서 대부분의 경우 sort 함수의 인자값으로 비교 함수를 전달하여 정렬하게 됩니다.

```js
var arr = [11, 1, 115, 42, 12];
arr.sort(function(a, b) { return a - b; });
//-> [ 1, 11, 12, 42, 115 ]
```

비교함수는 두개의 인자 (a, b) 를 받으며 각각 비교할 첫 번째, 두 번째 요소가 됩니다. 비교함수는 배열 요소의 가장 처음 두 요소부터 순차적으로 비교해가며 정렬을 실행합니다.

비교함수 `function(a, b) {}` 의 반환값에 따라 정렬 규칙은 아래와 같습니다.

- 결과값이 0보다 작으면 a가 낮은 색인으로 정렬됩니다.
- 결과값이 0이면 a와 b의 순서를 바꾸지 않습니다.
- 결과값이 0보다 크면 b가 낮은 색인으로 정렬됩니다.

위의 예에서 11과 1을 비교할 경우 `a - b` 는 10으로 0보다 크므로 b 가 앞으로 이동하게 됩니다.

비교함수는 다양한 방법으로 사용할 수 있습니다. 배열에 나열된 객체의 값으로 정렬하려면 아래와 같이 사용할 수 있습니다.

```js
var arr = [
  {name: "Dinah"},
  {name: "Jack"},
  {name: "Alice"},
  {name: "Ada"}
];

// name 프로퍼티의 값을 기준으로 알파벳 순으로 정렬
arr.sort(function(a, b) { return a.name > b.name });  
```



