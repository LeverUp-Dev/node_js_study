function a() {
  console.log("A");
}

//이름이 없는 함수 = 익명 함수
let A = function () {
  console.log("A");
};
a();
A();

function slowfunc(callback) {
  callback();
}
slowfunc(a);
slowfunc(A);
