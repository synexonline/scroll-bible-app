import { Router, Request, Response } from 'express';
import { generateImage } from '../services/stableDiffusion.js';

export const imagesRouter = Router();

// Track in-flight requests to prevent duplicate generation
const inFlight = new Map<string, Promise<{ imageUrl: string; cached: boolean }>>();

imagesRouter.post('/generate', async (req: Request, res: Response) => {
  const { sceneId, prompt, negativePrompt, width, height, steps, cfgScale } = req.body;

  if (!prompt) {
    res.status(400).json({ error: 'prompt is required' });
    return;
  }

  try {
    // Dedup concurrent requests for the same scene
    const key = sceneId || prompt;
    let promise = inFlight.get(key);

    if (!promise) {
      promise = generateImage({ prompt, negativePrompt, width, height, steps, cfgScale });
      inFlight.set(key, promise);
    }

    const result = await promise;
    inFlight.delete(key);

    res.json(result);
  } catch (error: any) {
    inFlight.delete(sceneId || prompt);
    console.error('Image generation error:', error.message);
    res.status(502).json({
      error: 'Failed to generate image. Is Stable Diffusion running?',
      details: error.message,
    });
  }
});
