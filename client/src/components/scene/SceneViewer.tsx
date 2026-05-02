import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Scene } from '../../content/types';
import { SceneImage } from './SceneImage';
import { SceneText } from './SceneText';
import { SceneTakeaway } from './SceneTakeaway';
import { ProgressBar } from '../ui/ProgressBar';
import { useImageGeneration } from '../../hooks/useImageGeneration';
import { useSwipe } from '../../hooks/useSwipe';
import { useProgressStore } from '../../stores/progressStore';

interface SceneViewerProps {
  scene: Scene;
  journeyId: string;
  currentIndex: number;
  totalScenes: number;
  nextScene?: { chapterId: string; order: number };
  prevScene?: { chapterId: string; order: number };
}

export function SceneViewer({
  scene,
  journeyId,
  currentIndex,
  totalScenes,
  nextScene,
  prevScene,
}: SceneViewerProps) {
  const navigate = useNavigate();
  const { imageUrl, isLoading, error } = useImageGeneration(scene.id, scene.imagePrompt);
  const markSceneComplete = useProgressStore((s) => s.markSceneComplete);

  // Mark scene as complete when viewed
  useEffect(() => {
    markSceneComplete(scene.id);
  }, [scene.id, markSceneComplete]);

  // Prefetch next scene image
  useEffect(() => {
    if (nextScene) {
      // We need the next scene's prompt — but we can trigger it from the page level
    }
  }, [nextScene]);

  const goNext = useCallback(() => {
    if (nextScene) {
      navigate(`/journey/${journeyId}/${nextScene.chapterId}/${nextScene.order}`);
    } else {
      navigate(`/journey/${journeyId}`);
    }
  }, [nextScene, journeyId, navigate]);

  const goPrev = useCallback(() => {
    if (prevScene) {
      navigate(`/journey/${journeyId}/${prevScene.chapterId}/${prevScene.order}`);
    }
  }, [prevScene, journeyId, navigate]);

  const swipeHandlers = useSwipe(goNext, goPrev);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goNext();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goPrev();
      if (e.key === 'Escape') navigate(`/journey/${journeyId}`);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, navigate, journeyId]);

  return (
    <div className="min-h-screen -mx-4 -mt-14 pt-0" {...swipeHandlers}>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <ProgressBar current={currentIndex + 1} total={totalScenes} />
      </div>

      {/* Back button */}
      <div className="fixed top-3 left-3 z-[60]">
        <button
          onClick={() => navigate(`/journey/${journeyId}`)}
          className="w-8 h-8 rounded-full bg-scroll-bg/60 backdrop-blur flex items-center justify-center text-scroll-text-muted hover:text-scroll-text transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Scene counter */}
      <div className="fixed top-3 right-3 z-[60]">
        <span className="text-xs text-scroll-text-muted bg-scroll-bg/60 backdrop-blur px-2.5 py-1 rounded-full">
          {currentIndex + 1} / {totalScenes}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={scene.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-20"
        >
          {/* Image */}
          <SceneImage imageUrl={imageUrl} isLoading={isLoading} error={error} />

          {/* Content */}
          <div className="px-5 space-y-6 -mt-4">
            <SceneText scene={scene} />
            <SceneTakeaway scene={scene} />

            {/* Navigation buttons */}
            <div className="flex gap-3 pt-2 pb-8">
              {prevScene && (
                <button
                  onClick={goPrev}
                  className="flex-1 py-3 rounded-xl border border-scroll-border text-scroll-text-muted hover:text-scroll-text hover:border-scroll-text-muted transition-colors text-sm"
                >
                  Previous
                </button>
              )}
              <button
                onClick={goNext}
                className="flex-1 py-3 rounded-xl bg-scroll-accent text-scroll-bg font-medium hover:bg-scroll-accent/90 transition-colors text-sm"
              >
                {nextScene ? 'Continue' : 'Finish Chapter'}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Tap zones for navigation */}
      <div className="fixed inset-y-0 left-0 w-12 z-40 cursor-pointer" onClick={goPrev} />
      <div className="fixed inset-y-0 right-0 w-12 z-40 cursor-pointer" onClick={goNext} />
    </div>
  );
}
