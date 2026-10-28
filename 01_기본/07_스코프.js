// 스코프(scope)는 변수나 함수에 접근할 수 있는 범위입니다.

// 함수 바깥에서 선언한 변수는 함수 안에서도 사용할 수 있습니다.
const greeting = "안녕하세요";

function greet(name) {
  // 함수 안에서 선언한 변수와 매개변수는 함수 안에서 사용할 수 있습니다.
  const message = greeting + ", " + name + "님!";
  console.log(message);
}

greet("철수");
console.log(greeting);

// 함수 안에서 선언한 변수는 함수 바깥에서 사용할 수 없습니다.
// console.log(message); // ReferenceError: message is not defined

// 같은 이름의 변수를 함수 안에서 선언하면 함수 안의 변수가 우선합니다.
const name = "영희";

function introduce() {
  const name = "민수";
  console.log("함수 안의 이름:", name);
}

introduce();
console.log("함수 밖의 이름:", name);

// var는 함수 스코프를 따르지만, let과 const는 블록 스코프를 따릅니다.
function showScope() {
  if (true) {
    var functionScoped = "함수 안 어디서나 접근 가능";
    let blockScoped = "이 블록 안에서만 접근 가능";
    console.log(blockScoped);
  }

  console.log(functionScoped);
  // console.log(blockScoped); // ReferenceError: blockScoped is not defined
}

showScope();
