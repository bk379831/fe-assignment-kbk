// (1) 객체 선언 (객체 리터럴)
let car = {
    company: "Hyundai",
    model: "Sonata",
    year: 2023,
};
    
// (2) 객체 프로퍼티 접근하기
    
// console.log(car["company"]) ;
    
const property = "year";
// console. log(car[property]);
    
// (3) 객체 속성 추가 및 수정
car.year = 2020;

// (3) 객체 속성 추가 및 수정
car.year = 2020;

// car.color = "White";

const newProperty = "color";
car [newProperty] = "White";

// console.log(car);

// (4) 객체 속성 삭제

delete car.year;
delete car.sunroof;

// console.log(car);

// (5) 중첩 객체
car.spec = {
    fuelType: "Gasoline",
};
    
// console. log(car.spec.fuelType);
    
// (6) 객체의 메서드
car.getCarInfo = function () {
    // this 특수한 키워드
    console.log(`Hello, Car!, ${this.model}`);
    };
        
    console.log(car.getCarInfo());