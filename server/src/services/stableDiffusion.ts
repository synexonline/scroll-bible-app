import axios from 'axios';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = path.join(__dirname, '..', 'cache');

const SD_API_URL = process.env.SD_API_URL || 'http://127.0.0.1:7860';

interface GenerateOptions {
  prompt: string;
  negativePrompt?: string;
  width?: number;
  height?: number;
  steps?: number;
  cfgScale?: number;
  seed?: number;
}

function getCacheKey(options: GenerateOptions): string {
  const hash = crypto
    .createHash('sha256')
    .update(JSON.stringify({ prompt: options.prompt, negativePrompt: options.negativePrompt }))
    .digest('hex')
    .slice(0, 16);
  return hash;
}

export async function generateImage(options: GenerateOptions): Promise<{ imageUrl: string; cached: boolean }> {
  const cacheKey = getCacheKey(options);
  const cachePath = path.join(CACHE_DIR, `${cacheKey}.png`);

  // Check cache
  if (fs.existsSync(cachePath)) {
    return { imageUrl: `/api/images/cache/${cacheKey}.png`, cached: true };
  }

  // Generate via SD WebUI API
  const payload = {
    prompt: options.prompt,
    negative_prompt: options.negativePrompt || '',
    steps: options.steps || 28,
    cfg_scale: options.cfgScale || 7,
    width: options.width || 768,
    height: options.height || 512,
    sampler_name: 'DPM++ 2M Karras',
    seed: options.seed ?? -1,
  };

  const response = await axios.post(`${SD_API_URL}/sdapi/v1/txt2img`, payload, {
    timeout: 120000,
  });

  const imageBase64 = response.data.images[0];
  const imageBuffer = Buffer.from(imageBase64, 'base64');

  // Ensure cache directory exists
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }

  fs.writeFileSync(cachePath, imageBuffer);

  return { imageUrl: `/api/images/cache/${cacheKey}.png`, cached: false };
}

export async function isSDAvailable(): Promise<boolean> {
  try {
    await axios.get(`${SD_API_URL}/sdapi/v1/sd-models`, { timeout: 3000 });
    return true;
  } catch {
    return false;
  }
}
