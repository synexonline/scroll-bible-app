import { useRef, useCallback } from 'react';

interface SwipeHandlers {
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
}

export function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void): SwipeHandlers {
  const startX = useRef(0);
  const startTime = useRef(0);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startTime.current = Date.now();
  }, []);

  const onTouchMove = useCallback((_e: React.TouchEvent) => {
    // Could add visual drag feedback here
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX.current;
      const elapsed = Date.now() - startTime.current;
      const velocity = Math.abs(deltaX) / elapsed;

      const MIN_DISTANCE = 50;
      const MIN_VELOCITY = 0.3;

      if (Math.abs(deltaX) > MIN_DISTANCE || velocity > MIN_VELOCITY) {
        if (deltaX < 0) {
          onSwipeLeft();
        } else {
          onSwipeRight();
        }
      }
    },
    [onSwipeLeft, onSwipeRight]
  );

  return { onTouchStart, onTouchMove, onTouchEnd };
}
