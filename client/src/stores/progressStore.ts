import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProgressState {
  completedScenes: string[];
  completedChapters: string[];
  completedJourneys: string[];
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;

  markSceneComplete: (sceneId: string) => void;
  markChapterComplete: (chapterId: string) => void;
  markJourneyComplete: (journeyId: string) => void;
  checkAndUpdateStreak: () => void;
  isSceneComplete: (sceneId: string) => boolean;
}

function getToday(): string {
  return new Date().toISOString().split('T')[0];
}

function getYesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedScenes: [],
      completedChapters: [],
      completedJourneys: [],
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: '',

      markSceneComplete: (sceneId: string) => {
        const state = get();
        if (state.completedScenes.includes(sceneId)) return;
        set({ completedScenes: [...state.completedScenes, sceneId] });
        get().checkAndUpdateStreak();
      },

      markChapterComplete: (chapterId: string) => {
        const state = get();
        if (state.completedChapters.includes(chapterId)) return;
        set({ completedChapters: [...state.completedChapters, chapterId] });
      },

      markJourneyComplete: (journeyId: string) => {
        const state = get();
        if (state.completedJourneys.includes(journeyId)) return;
        set({ completedJourneys: [...state.completedJourneys, journeyId] });
      },

      checkAndUpdateStreak: () => {
        const state = get();
        const today = getToday();
        const yesterday = getYesterday();

        if (state.lastActiveDate === today) return;

        let newStreak: number;
        if (state.lastActiveDate === yesterday) {
          newStreak = state.currentStreak + 1;
        } else {
          newStreak = 1;
        }

        set({
          currentStreak: newStreak,
          longestStreak: Math.max(newStreak, state.longestStreak),
          lastActiveDate: today,
        });
      },

      isSceneComplete: (sceneId: string) => {
        return get().completedScenes.includes(sceneId);
      },
    }),
    { name: 'scroll-progress' }
  )
);
