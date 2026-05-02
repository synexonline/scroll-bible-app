import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getScene, getAdjacentScenes } from '../content/journeys';
import { SceneViewer } from '../components/scene/SceneViewer';
import { prefetchImage } from '../hooks/useImageGeneration';

export function ScenePage() {
  const { journeyId, chapterId, sceneOrder } = useParams<{
    journeyId: string;
    chapterId: string;
    sceneOrder: string;
  }>();

  const order = parseInt(sceneOrder ?? '1', 10);
  const scene = getScene(journeyId ?? '', chapterId ?? '', order);
  const adjacent = getAdjacentScenes(journeyId ?? '', chapterId ?? '', order);

  // Prefetch next scene
  useEffect(() => {
    if (adjacent.next) {
      const nextScene = getScene(journeyId ?? '', adjacent.next.chapterId, adjacent.next.order);
      if (nextScene) {
        prefetchImage(nextScene.id, nextScene.imagePrompt);
      }
    }
  }, [adjacent.next, journeyId]);

  if (!scene) {
    return (
      <div className="py-20 text-center">
        <p className="text-scroll-text-muted">Scene not found.</p>
      </div>
    );
  }

  return (
    <SceneViewer
      scene={scene}
      journeyId={journeyId ?? ''}
      currentIndex={adjacent.currentIndex ?? 0}
      totalScenes={adjacent.totalScenes}
      nextScene={adjacent.next}
      prevScene={adjacent.prev}
    />
  );
}
