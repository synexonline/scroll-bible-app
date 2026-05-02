import { motion } from 'framer-motion';
import type { Scene } from '../../content/types';

interface SceneTextProps {
  scene: Scene;
}

export function SceneText({ scene }: SceneTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="space-y-5"
    >
      <div>
        <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-scroll-teal bg-scroll-teal/10 px-2.5 py-1 rounded-full mb-3">
          {scene.passage.display}
        </span>
        <p className="text-sm text-scroll-text-muted italic leading-relaxed">
          "{scene.originalText}"
        </p>
      </div>

      <div>
        <p className="text-base text-scroll-text leading-relaxed">
          {scene.interpretation}
        </p>
      </div>
    </motion.div>
  );
}
