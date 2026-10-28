// for(초기식; 조건식; 증감식){
//     실행할 명령
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

for (let idx = 1; idx <= 100; idx++) {
  if (idx > 10) {
    console.log("반복문 종료!");
    break;
  }
  console.log(idx);
}
