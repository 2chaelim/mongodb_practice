// express라이브러리 첨부
const express = require('express');
// express 사용 명령
const app = express();

// 경로 호출
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get('/sub1', function(req, res) {
  res.sendFile(__dirname + '/sub1.html');
});
app.get('/sub2', function(req, res) {
  res.sendFile(__dirname + '/sub2.html');
});

// post 요청
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.post('/add', function(req, res){
  console.log(req.body);
  res.send('send!');
});

// mongodb라이브러리 추가
const MongoClient = require('mongodb').MongoClient;
let db;
// 실행문
MongoClient.connect(
  'mongodb+srv://charry8540:dlcofla0524@cluster0.djdydyw.mongodb.net/', function(err, client) {
    if (err) return console.log(err);
    db = client.db('todo');
    db.collection('post').insertOne(
      {name : chaelim, date : 0},
      function(err, res) {
        console.log('done');
      }
    );
  }
);

// localhost server 호출
app.listen(8080, function(){
  console.log('listening on 8080');
});