export interface Journey {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverPrompt: string;
  chapters: Chapter[];
  tags: string[];
  estimatedMinutes: number;
}

export interface Chapter {
  id: string;
  title: string;
  journeyId: string;
  order: number;
  scenes: Scene[];
}

export interface Scene {
  id: string;
  chapterId: string;
  order: number;
  passage: PassageRef;
  originalText: string;
  interpretation: string;
  imagePrompt: string;
  takeaway: string;
  reflectionQuestion?: string;
}

export interface PassageRef {
  book: string;
  chapter: number;
  verseStart: number;
  verseEnd: number;
  display: string;
}

export interface UserProgress {
  completedScenes: string[];
  completedChapters: string[];
  completedJourneys: string[];
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;
}

export interface ImageGenerationRequest {
  sceneId: string;
  prompt: string;
  negativePrompt?: string;
  width?: number;
  height?: number;
  steps?: number;
  cfgScale?: number;
  seed?: number;
}

export interface ImageGenerationResponse {
  imageUrl: string;
  cached: boolean;
}
