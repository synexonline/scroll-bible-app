import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { imagesRouter } from './routes/images.js';
import { healthRouter } from './routes/health.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json({ limit: '50mb' }));

// Serve cached images
app.use('/api/images/cache', express.static(path.join(__dirname, 'cache')));

// Routes
app.use('/api/images', imagesRouter);
app.use('/api', healthRouter);

app.listen(PORT, () => {
  console.log(`SCROLL server running on http://localhost:${PORT}`);
});
