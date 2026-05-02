import { Link } from 'react-router-dom';
import { useProgressStore } from '../../stores/progressStore';

export function Header() {
  const streak = useProgressStore((s) => s.currentStreak);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-scroll-bg/80 backdrop-blur-lg border-b border-scroll-border">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold text-scroll-accent tracking-wide">
          SCROLL
        </Link>

        <div className="flex items-center gap-3">
          {streak > 0 && (
            <div className="flex items-center gap-1.5 text-sm text-scroll-text-muted">
              <span className="text-scroll-accent">{streak}</span>
              <span>day{streak !== 1 ? 's' : ''}</span>
            </div>
          )}
          <Link
            to="/profile"
            className="w-8 h-8 rounded-full bg-scroll-surface flex items-center justify-center text-scroll-text-muted hover:text-scroll-text transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
