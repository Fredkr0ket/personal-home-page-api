import express from 'express';
import tasksRouter from './routes/tasks.mjs';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors())
app.use('/tasks', tasksRouter);
//test

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});