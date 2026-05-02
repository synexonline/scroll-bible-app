import { journeys } from '../content/journeys';
import { JourneyCard } from '../components/journey/JourneyCard';

export function ExplorePage() {
  return (
    <div className="py-6 space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-scroll-text">Explore</h1>
        <p className="text-sm text-scroll-text-muted mt-1">
          Discover the stories that shaped history.
        </p>
      </div>

      <div className="space-y-4">
        {journeys.map((journey, i) => (
          <JourneyCard key={journey.id} journey={journey} index={i} />
        ))}
      </div>
    </div>
  );
}
