import express from 'express';
import clinicRoutes from './routes/clinicRoutes';
import { errorHandler } from './middlewares/errorHandler';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
// Routes
app.use('/clinic', clinicRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
