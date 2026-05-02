import { motion } from 'framer-motion';
import type { Scene } from '../../content/types';

interface SceneTakeawayProps {
  scene: Scene;
}

export function SceneTakeaway({ scene }: SceneTakeawayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="rounded-xl bg-scroll-accent-soft border border-scroll-accent/20 p-5 space-y-3"
    >
      <div className="flex items-center gap-2">
        <span className="text-scroll-accent text-sm">Key Takeaway</span>
      </div>
      <p className="font-display text-lg font-medium text-scroll-accent leading-snug">
        {scene.takeaway}
      </p>
      {scene.reflectionQuestion && (
        <p className="text-sm text-scroll-text-muted italic pt-1">
          {scene.reflectionQuestion}
        </p>
      )}
    </motion.div>
  );
}
