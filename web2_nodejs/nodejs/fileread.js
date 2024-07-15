const fs = require("fs"); //file system이라는 모듈 불러오기
fs.readFile("sample.txt", "utf-8", function (err, data) {
  console.log(data); //로그처럼 무언가 결과값을 출력하고 싶을 때는 해당파일이 위치한 폴더로 경로를 갱신해야 함
});
// readfile 함수에서 'utf-8' 즉, 유니코드로 변환하지 않고 data를 반환 받으면 ANSI코드로 반환됨
