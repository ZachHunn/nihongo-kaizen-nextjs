import { Prisma } from '@prisma/client';
import prisma from '../../prisma/prisma';

export const getKanjiList = async () => {
  return prisma.kanji.findMany();
};

export const findKanji = async (kanjiId: number) => {
  return prisma.kanji.findUniqueOrThrow({
    where: {
      id: kanjiId,
    },
  });
};
export const createKanji = async (kanjiData: Prisma.KanjiCreateInput) => {
  return prisma.kanji.create({
    data: kanjiData,
  });
};
