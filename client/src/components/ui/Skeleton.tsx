export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-scroll-surface rounded-lg ${className}`}
    />
  );
}
