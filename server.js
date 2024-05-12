import express from 'express';
import { router } from './routes/route.js';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { dbConnection } from './config/db.js';

const app = express();
const PORT = 8080;

const corsOptions = {
  origin: '*',
  credentials: true
}

app.use(cors(corsOptions))
app.use(helmet())
app.use(express.json());
app.use(cookieParser());

app.use('/api', router);
// localhost:8080/api

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

dbConnection();