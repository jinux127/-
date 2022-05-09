const cal = require('./cal');
const func = require('./func');
// require 한번만 호출 후 사라짐
// 한번 호출, 보관, 삭제
// console.log(cal.add(5, 3));
// console.log(cal.sub(5, 3));
// console.log(cal.mul(5, 3));

// console.log(func);

for (let i = 0; i < 10; i++) {
    // 10번을 호출
    console.log(func());
}
