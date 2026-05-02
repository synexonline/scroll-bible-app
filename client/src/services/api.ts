const API_BASE = '/api';

export async function generateImage(sceneId: string, prompt: string, negativePrompt?: string) {
  const res = await fetch(`${API_BASE}/images/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sceneId, prompt, negativePrompt }),
  });

  if (!res.ok) {
    throw new Error(`Image generation failed: ${res.statusText}`);
  }

  return res.json() as Promise<{ imageUrl: string; cached: boolean }>;
}

export async function checkHealth() {
  const res = await fetch(`${API_BASE}/health`);
  return res.json() as Promise<{ status: string; sdAvailable: boolean }>;
}
