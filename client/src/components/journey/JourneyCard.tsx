import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Journey } from '../../content/types';
import { useProgressStore } from '../../stores/progressStore';

interface JourneyCardProps {
  journey: Journey;
  index: number;
}

export function JourneyCard({ journey, index }: JourneyCardProps) {
  const completedScenes = useProgressStore((s) => s.completedScenes);
  const totalScenes = journey.chapters.reduce((acc, ch) => acc + ch.scenes.length, 0);
  const completed = journey.chapters
    .flatMap((ch) => ch.scenes)
    .filter((s) => completedScenes.includes(s.id)).length;
  const progress = totalScenes > 0 ? completed / totalScenes : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Link
        to={`/journey/${journey.id}`}
        className="block group rounded-2xl overflow-hidden bg-scroll-surface border border-scroll-border hover:border-scroll-accent/30 transition-all duration-300"
      >
        <div className="h-40 bg-gradient-to-br from-scroll-accent/20 via-scroll-teal/10 to-scroll-surface flex items-center justify-center">
          <div className="text-6xl opacity-60 group-hover:opacity-80 transition-opacity">
            {journey.id === 'life-of-jesus' ? '✦' : '📜'}
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            {journey.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest text-scroll-teal bg-scroll-teal/10 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-display text-lg font-semibold text-scroll-text group-hover:text-scroll-accent transition-colors">
            {journey.title}
          </h3>
          <p className="text-sm text-scroll-text-muted mt-1">{journey.subtitle}</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-scroll-text-muted">
              {journey.estimatedMinutes} min
            </span>

            {progress > 0 && (
              <div className="flex items-center gap-2">
                <div className="w-16 h-1 bg-scroll-bg rounded-full overflow-hidden">
                  <div
                    className="h-full bg-scroll-accent rounded-full transition-all"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <span className="text-xs text-scroll-accent">{Math.round(progress * 100)}%</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
