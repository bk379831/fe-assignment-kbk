// (1) 산술 연산자
// console.log(5 + 3);
// console.log(5 - 3);
// console.log(5 * 3);
// console.log(5 / 3);
// console.log(5 % 3);
// console.log(5 ** 3);

// (2) 문자열 연결 연산자
// console.log("Hello" + "World");
// console.log("Hello" + 42);
// console.log("Hello" + String(42);

// (3) 비교 연산자
// console.log(5> 3);
// console.log(5< 3);
// console.log(5 >= 5);
// console.log(5 <= 5);

// console.log(5 == "5"); => 자동으로 형 변환, 값 비교하므로 True 반환
// console.log(5 === "5"); => 타입까지 비교하므로 False 반환환

// console.log(5 != "5");
// console.log(5 !== "5");

// (4) 논리 연산자
// console.log(true && true);
// console.log(true && false);

// console.log(true || false);
// console.log(false | | false);

// console.log(!true);
// console.log(!false);

// (5) 삼항 연산자
// A ? B : C

// let score = 95;

// console.log(score >= 90 ? "Pass" : "Fail");

// (6) 대입 연산자
// let score = 90;

// score += 10;
// score -= 10;
// score /= 10;
// scroe *= 10;

// console.log(score);

// (7) 증감 연산자
let x = 10;

// x += 1;
let y = x++; // 후위연산

console.log(y);
console.log(x);