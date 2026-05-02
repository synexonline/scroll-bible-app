import { Router, Request, Response } from 'express';
import { isSDAvailable } from '../services/stableDiffusion.js';

export const healthRouter = Router();

healthRouter.get('/health', async (_req: Request, res: Response) => {
  const sdAvailable = await isSDAvailable();
  res.json({
    status: 'ok',
    sdAvailable,
    timestamp: new Date().toISOString(),
  });
});
