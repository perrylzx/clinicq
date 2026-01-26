import express from 'express';
import clinicRoutes from './routes/clinicRoutes';
import { errorHandler } from './middlewares/errorHandler';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.set('query parser', 'extended');
// Routes
app.use('/clinic', clinicRoutes);

app.use(errorHandler);

export default app;
