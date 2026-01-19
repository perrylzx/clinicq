import express from 'express';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors())
// Routes
app.use('/users', userRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
