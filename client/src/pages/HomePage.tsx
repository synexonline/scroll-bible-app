import { motion } from 'framer-motion';
import { journeys } from '../content/journeys';
import { JourneyCard } from '../components/journey/JourneyCard';
import { useProgressStore } from '../stores/progressStore';

export function HomePage() {
  const { currentStreak, longestStreak, completedScenes } = useProgressStore();

  return (
    <div className="py-6 space-y-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="font-display text-3xl font-bold text-scroll-text">
          Ancient stories.
          <br />
          <span className="text-scroll-accent">Fresh perspective.</span>
        </h1>
        <p className="text-sm text-scroll-text-muted max-w-xs mx-auto">
          Explore the New Testament through vivid imagery and modern storytelling.
        </p>
      </motion.div>

      {/* Stats */}
      {completedScenes.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="bg-scroll-surface rounded-xl p-3 text-center border border-scroll-border">
            <div className="font-display text-2xl font-bold text-scroll-accent">
              {currentStreak}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-scroll-text-muted mt-1">
              Streak
            </div>
          </div>
          <div className="bg-scroll-surface rounded-xl p-3 text-center border border-scroll-border">
            <div className="font-display text-2xl font-bold text-scroll-teal">
              {completedScenes.length}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-scroll-text-muted mt-1">
              Scenes
            </div>
          </div>
          <div className="bg-scroll-surface rounded-xl p-3 text-center border border-scroll-border">
            <div className="font-display text-2xl font-bold text-scroll-text">
              {longestStreak}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-scroll-text-muted mt-1">
              Best
            </div>
          </div>
        </motion.div>
      )}

      {/* Journeys */}
      <div className="space-y-4">
        <h2 className="font-display text-lg font-semibold text-scroll-text">Your Journeys</h2>
        <div className="space-y-4">
          {journeys.map((journey, i) => (
            <JourneyCard key={journey.id} journey={journey} index={i} />
          ))}
        </div>
      </div>

      {/* Coming soon */}
      <div className="text-center py-6">
        <p className="text-xs text-scroll-text-muted">
          More journeys coming soon — stay tuned
        </p>
      </div>
    </div>
  );
}
