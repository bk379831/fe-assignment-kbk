// (1) 배열 선언 (배열 리터럴)
let fruits = ["Apple", "Banana", "Cherry"];

// console.log(fruits[0]);
// console. log(fruits [1]);
// console.log(fruits [2]);

let mixedArray = [
    42,
    "Hello",
    true,
    { key: "value" },
    [(1, 2, 3)],
    function () {
        console.log("I'm a function");
    },
];

// console.log(mixedArray[5]())

// (2) 배열을 다룰 수 있는 기본 메서드

// 2.1 push -> 배열의 끝에 요소를 추가
// fruits.push("Grape");

// 2.2 pop -> 배열의 마지막 요소를 제거
// fruits.pop();

// 2.3 shift -> 배열의 첫 번째 요소를 제거
// fruits.shift();

// 2.4 unshift -> 배열의 첫 번째 요소를 추가
// fruits.unshift("Grape");
// console.log(fruits);

// 2.5 splice -> 특정 위치에 있는 요소를 삭제하거나, 추가를 할 수 있음
// fruits.splice(1, 1, "A", "B", "C");

// 2.6 slice -> 배열의 일부를 잘라서 반환하는 메서드
// let slicedFrutis = fruits.slice(1, 3);
// console.log(slicedFrutis);

// (3) 배열의 응용 메서드

// 3.1 forEach -> 배열의 모든 요소를 순회

// fruits.forEach((fruit, index) => {
//     console. log('Index: ${index}: ${fruit}');
// });
    
// 3.2 filter -> 특정 조건을 만족하는 요소만 새로운 배열로 반환
    
// let numbers = [10, 25, 30, 45, 60];
    
// let filteredNumbes = numbers.filter((number) => {
//     return number > 10;
// });

// 3.3 map -> 배열의 각 요소를 변형하여 새로운 배열 생성
let doubleNumbers = numbers.map((number) =>{
    return number * 2;
});
    
    console. log(doubleNumbers);