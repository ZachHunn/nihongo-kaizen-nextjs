import { Kanji, Vocabulary, Particle } from '@prisma/client';

export type KanjiDTO = {
  kanjiList: Kanji[];
};

export type VocabularyDTO = {
  vocabularyList: Vocabulary[];
};

export type ParticleDTO = {
  particleList: Particle[];
};

export interface IApiMessage {
  message: string;
}
