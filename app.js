const express = require('express'); //express연결
const app = express();
const port = 5000;//서버포트
const connect = require('./schemas');//schemas연결 몽구스 사용
connect();

const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.js');//라우터 index.js 모듈가져오기

app.use(express.json());//제이슨 사용할수있도록

app.use('/',[indexRouter]); //()루트 경로에대한 모든요청을 처리하기
app.use(express.json());
app.use(cookieParser());

// app.get('/', (req, res) => {  //위에꺼있으면 필요없음
//   res.send('hello blog :)');
// });

app.listen(port, () => {
  console.log(`${port} 포트 서버가 열렸어요.`);
});
