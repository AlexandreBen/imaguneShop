import 'dotenv/config';

import  express from "express";

import { UserService } from './service/user-service.js';


const app = express();
const port = 3000;

app.get('/', (req, res) => {

  const userService = new UserService();

   userService.add (
  {
    name: 'Alexandre',
    email: 'abaca1000@gmail.com',
    password: '123456',

  });
  
  res.send('Imagine Shop!!!');

});

app.post('/users', async (req, res) =>{
  userService.add (
    {
      name: 'Alexandre',
      email: 'abaca1000@gmail.com',
      password: '123456',
  
    });

});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
