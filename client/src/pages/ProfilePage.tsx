import { motion } from 'framer-motion';
import { useProgressStore } from '../stores/progressStore';
import { journeys } from '../content/journeys';

export function ProfilePage() {
  const { currentStreak, longestStreak, completedScenes, completedJourneys } =
    useProgressStore();

  const totalScenes = journeys.reduce(
    (acc, j) => acc + j.chapters.reduce((a, ch) => a + ch.scenes.length, 0),
    0
  );

  return (
    <div className="py-6 space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-2xl font-bold text-scroll-text">Your Progress</h1>
        <p className="text-sm text-scroll-text-muted mt-1">Keep the momentum going.</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-scroll-surface rounded-xl p-5 border border-scroll-border text-center">
          <div className="font-display text-4xl font-bold text-scroll-accent">{currentStreak}</div>
          <div className="text-xs text-scroll-text-muted mt-1">Day Streak</div>
        </div>
        <div className="bg-scroll-surface rounded-xl p-5 border border-scroll-border text-center">
          <div className="font-display text-4xl font-bold text-scroll-teal">{longestStreak}</div>
          <div className="text-xs text-scroll-text-muted mt-1">Best Streak</div>
        </div>
        <div className="bg-scroll-surface rounded-xl p-5 border border-scroll-border text-center">
          <div className="font-display text-4xl font-bold text-scroll-text">
            {completedScenes.length}
            <span className="text-lg text-scroll-text-muted">/{totalScenes}</span>
          </div>
          <div className="text-xs text-scroll-text-muted mt-1">Scenes</div>
        </div>
        <div className="bg-scroll-surface rounded-xl p-5 border border-scroll-border text-center">
          <div className="font-display text-4xl font-bold text-scroll-text">
            {completedJourneys.length}
          </div>
          <div className="text-xs text-scroll-text-muted mt-1">Journeys</div>
        </div>
      </div>

      <div className="bg-scroll-surface rounded-xl p-5 border border-scroll-border">
        <h2 className="font-display font-semibold text-scroll-text mb-3">Roadmap</h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 text-scroll-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-scroll-accent" />
            <span>Gemini AI-powered interpretations</span>
          </div>
          <div className="flex items-center gap-3 text-scroll-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-scroll-teal" />
            <span>Daily Devotional mode</span>
          </div>
          <div className="flex items-center gap-3 text-scroll-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-scroll-text-muted" />
            <span>Character Explorer</span>
          </div>
          <div className="flex items-center gap-3 text-scroll-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-scroll-text-muted" />
            <span>Interactive Quizzes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
