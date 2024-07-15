// 모듈 - C#이나 자바로 치면 패키지 같은 것 using, import 등등 (라이브러리에서 불러오는 기능들)
var http = require("http"); //http 요구
var fs = require("fs"); // fs 요구 fs? 아직 모름
var url = require("url"); //require 요구하다

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query; //parse 분석하다
  console.log(queryData);
  if (_url == "/") {
    _url = "/index.html";
  }
  if (_url == "/favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(fs.readFileSync(queryData));
});
app.listen(3000);
