import { motion, AnimatePresence } from 'framer-motion';
import { Skeleton } from '../ui/Skeleton';

interface SceneImageProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: Error | null;
}

export function SceneImage({ imageUrl, isLoading, error }: SceneImageProps) {
  return (
    <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden bg-scroll-surface">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <Skeleton className="w-full h-full rounded-none" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-scroll-accent border-t-transparent rounded-full animate-spin" />
                <span className="text-xs text-scroll-text-muted">Generating scene...</span>
              </div>
            </div>
          </motion.div>
        )}

        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-scroll-surface"
          >
            <div className="text-center px-6">
              <div className="text-3xl mb-2">🎨</div>
              <p className="text-sm text-scroll-text-muted">
                Image generation unavailable.
                <br />
                <span className="text-xs">Make sure Stable Diffusion is running locally.</span>
              </p>
            </div>
          </motion.div>
        )}

        {imageUrl && !isLoading && (
          <motion.img
            key="image"
            src={imageUrl}
            alt="Scene illustration"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
          />
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-scroll-bg to-transparent" />
    </div>
  );
}
