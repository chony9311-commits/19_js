// function hello(name) {
//   return "안녕하세요, " + name + "님!";
// }

// console.log(hello("철수"));

// function 더하기(a, b) {
//   return a + b;
// }

// console.log(더하기(3, 5)); // 8
// console.log(더하기(10, 20)); // 30

function greet(name) {
  console.log("안녕하세요, " + name + "님!");
}

function callUser(func, name) {
  func(name);
}

callUser(greet, "철수");

function repeat(count) {
    for (let idx = 0; idx < count)
}
