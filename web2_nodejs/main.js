// 모듈 - C#이나 자바로 치면 패키지 같은 것 using, import 등등 (라이브러리에서 불러오는 기능들)
var http = require("http"); //http 요구
var fs = require("fs"); // fs(파일 편집기)
var url = require("url"); //require 요구하다

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query; //parse 분석하다
  var pathname = url.parse(_url, true).pathname;
  var title = queryData.id;

  if (pathname === "/") {
    fs.readFile(`data/${title}`, "utf-8", function (err, description) {
      var template = `
    <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    <ol>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ol>
    <h2>${title}</h2>
    <p>${description}</p>
  </body>
  </html>
    `;
      response.end(template);
      response.writeHead(200);
    });
  } else {
    // response.writeHead(404);
    response.end("not found");
  }
});
app.listen(3000);
// 실습 시 복붙은 지양하자 아마도 복붙으로 인해서 오류가 난 것으로 보임
