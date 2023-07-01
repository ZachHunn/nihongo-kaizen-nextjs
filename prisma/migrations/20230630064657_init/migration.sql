-- CreateTable
CREATE TABLE "Kanji" (
    "id" SERIAL NOT NULL,
    "character" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "readings" TEXT[],
    "strokeCount" INTEGER NOT NULL,
    "gradeLevel" INTEGER,
    "jlptLevel" INTEGER,
    "examples" TEXT[],

    CONSTRAINT "Kanji_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vocabulary" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "readings" TEXT[],
    "partOfSpeech" TEXT,
    "kanjiId" INTEGER,

    CONSTRAINT "Vocabulary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kanji_character_key" ON "Kanji"("character");

-- CreateIndex
CREATE UNIQUE INDEX "Vocabulary_word_key" ON "Vocabulary"("word");

-- AddForeignKey
ALTER TABLE "Vocabulary" ADD CONSTRAINT "Vocabulary_kanjiId_fkey" FOREIGN KEY ("kanjiId") REFERENCES "Kanji"("id") ON DELETE SET NULL ON UPDATE CASCADE;
