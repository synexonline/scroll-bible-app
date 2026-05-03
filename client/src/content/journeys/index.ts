import type { Journey } from '../types';
import { lifeOfJesus } from './life-of-jesus';
import { paulsAdventures } from './pauls-adventures';
import { miraclesParables } from './miracles-parables';

export const journeys: Journey[] = [lifeOfJesus, paulsAdventures, miraclesParables];

export function getJourney(id: string): Journey | undefined {
  return journeys.find((j) => j.id === id);
}

export function getScene(journeyId: string, chapterId: string, sceneOrder: number) {
  const journey = getJourney(journeyId);
  if (!journey) return undefined;
  const chapter = journey.chapters.find((c) => c.id === chapterId);
  if (!chapter) return undefined;
  return chapter.scenes.find((s) => s.order === sceneOrder);
}

export function getAdjacentScenes(journeyId: string, chapterId: string, sceneOrder: number) {
  const journey = getJourney(journeyId);
  if (!journey) return { prev: undefined, next: undefined, totalScenes: 0 };

  const allScenes = journey.chapters.flatMap((c) =>
    c.scenes.map((s) => ({ ...s, chapterId: c.id }))
  );

  const currentIndex = allScenes.findIndex(
    (s) => s.chapterId === chapterId && s.order === sceneOrder
  );

  return {
    prev: currentIndex > 0 ? allScenes[currentIndex - 1] : undefined,
    next: currentIndex < allScenes.length - 1 ? allScenes[currentIndex + 1] : undefined,
    currentIndex,
    totalScenes: allScenes.length,
  };
}
