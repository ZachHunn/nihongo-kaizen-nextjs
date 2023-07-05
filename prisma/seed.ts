import { PrismaClient } from '@prisma/client';
import { Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const seedKanjiTable = async () => {
  const kanjiData: Prisma.KanjiCreateInput = {
    character: '一',
    meanings: ['one'],
    onReading: ['いち', 'いっ', 'いつ'],
    strokeCount: 1,
    kunReading: ['ひと'],
    examples: ['一月'],
  };
  const createKanji = async (kanjiInput: Prisma.KanjiCreateInput) => {
    await prisma.kanji.create({ data: kanjiInput });
  };

  const createKanjiInDB = async () => {
    await createKanji(kanjiData);
  };

  await createKanjiInDB();
};
const main = async () => {
  await seedKanjiTable();
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
