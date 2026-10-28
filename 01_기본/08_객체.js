// 객체(object)는 여러 값을 이름(키)으로 묶어 관리하는 자료형입니다.
// 키와 값 한 쌍을 프로퍼티(property)라고 합니다.
const person = {
  name: "철수",
  age: 20,
  "favorite color": "파란색",
};

console.log(person);

// 점 표기법이나 대괄호 표기법으로 프로퍼티에 접근할 수 있습니다.
console.log(person.name);
console.log(person["age"]);
console.log(person["favorite color"]); // 공백이 있는 키는 대괄호 표기법 사용

// 없는 프로퍼티에 값을 할당하면 새 프로퍼티가 추가됩니다.
person.job = "학생";

// 기존 프로퍼티의 값도 바꿀 수 있습니다.
person.age = 21;

console.log(person);

// delete로 프로퍼티를 삭제할 수 있습니다.
delete person.job;
console.log(person);

// 객체의 프로퍼티 값으로 함수를 넣으면 메서드라고 합니다.
const calculator = {
  number: 10,
  add(value) {
    return this.number + value;
  },
};

console.log(calculator.add(5)); // 15
// this는 메서드를 호출한 객체(calculator)를 가리킵니다.

let food = ["짜장면", "피자", "치킨"];

food[2] = "파스타";
food[3] = "레몬";

console.log(food);
