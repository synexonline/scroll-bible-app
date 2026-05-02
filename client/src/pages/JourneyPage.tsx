import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getJourney } from '../content/journeys';
import { ChapterList } from '../components/journey/ChapterList';
import { useProgressStore } from '../stores/progressStore';

export function JourneyPage() {
  const { journeyId } = useParams<{ journeyId: string }>();
  const journey = getJourney(journeyId ?? '');
  const completedScenes = useProgressStore((s) => s.completedScenes);

  if (!journey) {
    return (
      <div className="py-20 text-center">
        <p className="text-scroll-text-muted">Journey not found.</p>
        <Link to="/" className="text-scroll-accent text-sm mt-2 inline-block">
          Go home
        </Link>
      </div>
    );
  }

  const totalScenes = journey.chapters.reduce((acc, ch) => acc + ch.scenes.length, 0);
  const completed = journey.chapters
    .flatMap((ch) => ch.scenes)
    .filter((s) => completedScenes.includes(s.id)).length;

  return (
    <div className="py-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link to="/" className="text-xs text-scroll-text-muted hover:text-scroll-text transition-colors">
          &larr; Back
        </Link>

        <div className="mt-4 rounded-2xl overflow-hidden bg-gradient-to-br from-scroll-accent/20 via-scroll-teal/10 to-scroll-surface h-32 flex items-center justify-center border border-scroll-border">
          <span className="text-5xl opacity-60">✦</span>
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-2 mb-2">
            {journey.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest text-scroll-teal bg-scroll-teal/10 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-2xl font-bold text-scroll-text">{journey.title}</h1>
          <p className="text-sm text-scroll-text-muted mt-1">{journey.description}</p>

          <div className="flex items-center gap-4 mt-3 text-xs text-scroll-text-muted">
            <span>{journey.estimatedMinutes} min</span>
            <span>{journey.chapters.length} chapters</span>
            <span>{totalScenes} scenes</span>
            {completed > 0 && (
              <span className="text-scroll-accent">
                {completed}/{totalScenes} complete
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <div className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-scroll-text">Chapters</h2>
        <ChapterList chapters={journey.chapters} journeyId={journey.id} />
      </div>
    </div>
  );
}
