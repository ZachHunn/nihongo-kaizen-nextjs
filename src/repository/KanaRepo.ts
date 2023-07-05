import {
  Prisma,
  Kana,
  KanaType,
  AdditionalCharacterType,
} from '@prisma/client';
import prisma from '../../prisma/prisma';

export const getKanaList = async () => {
  return prisma.kana.findMany();
};

export const getHiragana = async () => {
  return prisma.kana.findMany({
    where: {
      type: KanaType.HIRAGANA,
    },
  });
};

export const getHiraganaDakuon = async () => {
  return prisma.kana.findMany({
    where: {
      type: KanaType.HIRAGANA,
      additionalCharacterType: AdditionalCharacterType.DAKUON,
    },
  });
};

export const getHiraganaHandakuon = async () => {
  return prisma.kana.findMany({
    where: {
      type: KanaType.HIRAGANA,
      additionalCharacterType: AdditionalCharacterType.HANDAKUON,
    },
  });
};

export const getHiraganaYouon = async () => {
  return prisma.kana.findMany({
    where: {
      type: KanaType.HIRAGANA,
      additionalCharacterType: AdditionalCharacterType.YOUON,
    },
  });
};
export const getKatakana = async () => {
  return prisma.kana.findMany({
    where: { type: KanaType.KATAKANA },
  });
};

export const getKatakanaDakuon = async () => {
  return prisma.kana.findMany({
    where: {
      type: KanaType.KATAKANA,
      additionalCharacterType: AdditionalCharacterType.DAKUON,
    },
  });
};

export const getKatakanaHandakuon = async () => {
  return prisma.kana.findMany({
    where: {
      type: KanaType.KATAKANA,
      additionalCharacterType: AdditionalCharacterType.HANDAKUON,
    },
  });
};

export const getKatakanaYouon = async () => {
  return prisma.kana.findMany({
    where: {
      type: KanaType.KATAKANA,
      additionalCharacterType: AdditionalCharacterType.YOUON,
    },
  });
};
