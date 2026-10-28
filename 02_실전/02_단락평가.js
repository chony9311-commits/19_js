// AND 단락평가

// function calcA() {
//   console.log("a");
//   return false;
// }

// function calcB() {
//   console.log("b");
//   return true;
// }

// console.log(calcA());

// // AND단락평가를 이용해 오류 방지하기
// function calcA() {
//   console.log("a");
//   return undefined;
// }

// function calcB() {
//   console.log("b");
//   return true;
// }

// console.log(calcA() && calcB());

// function getName(person) {
//   return person.name;
// }

// let person;
// let name = getName(person);

// console.log(name);

function getName(person) {
  if (person !== undefined) {
    return person.name;
  } else {
    return "매개변수가 객체가 아닙니다.";
  }
}
let person;
let name = getName(person);
console.log(name);
