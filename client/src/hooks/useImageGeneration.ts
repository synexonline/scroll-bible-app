import { useState, useEffect, useRef } from 'react';
import { generateImage } from '../services/api';
import { NEGATIVE_PROMPT } from '../content/prompts';

const imageCache = new Map<string, string>();

export function useImageGeneration(sceneId: string, prompt: string) {
  const [imageUrl, setImageUrl] = useState<string | null>(imageCache.get(sceneId) ?? null);
  const [isLoading, setIsLoading] = useState(!imageCache.has(sceneId));
  const [error, setError] = useState<Error | null>(null);
  const abortRef = useRef(false);

  useEffect(() => {
    if (imageCache.has(sceneId)) {
      setImageUrl(imageCache.get(sceneId)!);
      setIsLoading(false);
      return;
    }

    abortRef.current = false;
    setIsLoading(true);
    setError(null);

    generateImage(sceneId, prompt, NEGATIVE_PROMPT)
      .then((result) => {
        if (abortRef.current) return;
        imageCache.set(sceneId, result.imageUrl);
        setImageUrl(result.imageUrl);
        setIsLoading(false);
      })
      .catch((err) => {
        if (abortRef.current) return;
        setError(err);
        setIsLoading(false);
      });

    return () => {
      abortRef.current = true;
    };
  }, [sceneId, prompt]);

  return { imageUrl, isLoading, error };
}

export function prefetchImage(sceneId: string, prompt: string) {
  if (imageCache.has(sceneId)) return;
  generateImage(sceneId, prompt, NEGATIVE_PROMPT)
    .then((result) => {
      imageCache.set(sceneId, result.imageUrl);
    })
    .catch(() => {});
}
