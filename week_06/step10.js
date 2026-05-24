// (1) 개체의 구조 분해 할당

// let person = {
//     name: "Alice",
//     age: 20,
//     city: "New York",
//     job: "Developer",
// };
    
// const {age, name, ... rest } = person;

// (2) 배열의 구조 분해 할당

const colors = ["Red", "Green", "Blue"];

// const firstColor = colors [0];
// const secondColor = colors[1];

const [firstColor, ... rest] = colors;

// (3) 객체의 스프레드 연산
const person = { name: "Bob", age: 30 };

const person2 = {
... person,
name: "Alice",
city: "New York",
};

// (4) 배열의 스프레드 연산
const fruits1 = ["Apple", "Banana"];
const fruits2 = [ ... fruits1, "Mango"];

console.log(fruits2);

// (5) 함수의 나머지 매개변수

function sum( ... params) {
    let ret = 0;

    params. forEach((param) =>{
        ret += param;
    });

console.log(ret);
};

sum(10, 20);
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);