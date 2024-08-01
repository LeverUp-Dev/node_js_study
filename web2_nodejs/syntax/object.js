// 배열
let members = ["egoing", "k8805", "hoya"];
console.log(members[1]); // k8805 단일 조회
// 반복문을 이용한 배열의 데이터 모두 조회
members.forEach((index) => {
  console.log(index);
});

// 객체
let roles = {
  programmer: "egoing",
  desiger: "k8805",
  manager: "hoya",
};
console.log(roles.desiger); // 단일 조회
// for문을 이용한 객체의 데이터 모두 조호;
let index = 0;
for (let name in roles) {
  console.log("roles의 " + index + "번째 키:" + name);
  console.log("roles의 " + name + "의 값:" + roles[name]);
  index++;
}
