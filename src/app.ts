import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoute } from './app/modules/students/student.route';
const app: Application = express();
// const port = 3000;

app.use(express.json());
app.use(cors());

// applicaton routes
app.use('/api/v1/students', studentRoute);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
