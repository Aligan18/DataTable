// Подключение библиотеки Express
 import express from 'express';
const router = express.Router('db.json');
// Создание экземпляра приложения Express
const app = express();
import  cors  from 'cors';

// Определение маршрута для обработки GET-запросов к корневому URL
app.get('/users', (req, res) => {
  const { page = 1, limit =10  } = req.query;
  console.log(limit)
  const start = (page - 1) * limit;
  const end = page * limit;
  const data = router.db.getState();

  const paginatedData =  data.users.slice(start, end);

  const result = { 
    users: paginatedData,
    last : data.users.length < page * limit +limit,
    fullLangth : data.users.length,
    currentPage : page 
  }
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.header('Access-Control-Allow-Headers', '*')
  console.log(result)
  res.send(result);
});

app.use(cors());
// Запуск сервера на порту 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});






// import  jsonServer from 'json-server';


// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// // Добавляем middleware для обработки параметров пагинации
// server.use('/users',(req, res, next) => {
//   const { page = 1, limit =10  } = req.query;
//   console.log(limit)
//   const start = (page - 1) * limit;
//   const end = page * limit;
//   const data = router.db.getState();


  
//   const paginatedData =  data.users.slice(start, end);

//   const result = { 
//     users: paginatedData,
//     last : data.users.length < page * limit +limit,
//     fullLangth : data.users.length,
//     currentPage : page 
//   }
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
//   res.header('Access-Control-Allow-Headers', '*')
// console.log(result)
//   res.json(result);

// });

// server.use(middlewares);
// server.use(router);
// server.use(cors({origin: "http://localhost:5173"}));

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`JSON Server is running on http://localhost:${PORT}`);
// });