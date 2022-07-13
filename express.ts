import express, { RequestHandler } from 'express';
import { json } from 'body-parser';
import { router } from './routes';
export const app = express();
app.use(json() as RequestHandler);
app.use(express.static('files'));

app.use('/api', router);
