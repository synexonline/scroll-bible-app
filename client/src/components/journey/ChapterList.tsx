import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Chapter } from '../../content/types';
import { useProgressStore } from '../../stores/progressStore';

interface ChapterListProps {
  chapters: Chapter[];
  journeyId: string;
}

export function ChapterList({ chapters, journeyId }: ChapterListProps) {
  const completedScenes = useProgressStore((s) => s.completedScenes);

  return (
    <div className="space-y-3">
      {chapters.map((chapter, i) => {
        const completed = chapter.scenes.filter((s) => completedScenes.includes(s.id)).length;
        const total = chapter.scenes.length;
        const allDone = completed === total && total > 0;

        return (
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={`/journey/${journeyId}/${chapter.id}/1`}
              className={`block p-4 rounded-xl border transition-all duration-200 ${
                allDone
                  ? 'bg-scroll-accent/5 border-scroll-accent/20'
                  : 'bg-scroll-surface border-scroll-border hover:border-scroll-accent/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-display font-semibold ${
                      allDone
                        ? 'bg-scroll-accent text-scroll-bg'
                        : 'bg-scroll-bg text-scroll-text-muted'
                    }`}
                  >
                    {allDone ? '✓' : chapter.order}
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-scroll-text">{chapter.title}</h4>
                    <p className="text-xs text-scroll-text-muted mt-0.5">
                      {total} scene{total !== 1 ? 's' : ''}
                      {completed > 0 && !allDone && ` · ${completed} completed`}
                    </p>
                  </div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-scroll-text-muted"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
