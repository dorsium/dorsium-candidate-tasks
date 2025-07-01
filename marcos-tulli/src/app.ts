import express from 'express';
import apiRouter from './api';
import { setupSwagger } from './swagger';

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

setupSwagger(app);

export default app;
