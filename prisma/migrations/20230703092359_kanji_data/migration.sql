/*
  Warnings:

  - You are about to drop the column `isParticle` on the `Kana` table. All the data in the column will be lost.
  - You are about to drop the column `gradeLevel` on the `Kanji` table. All the data in the column will be lost.
  - You are about to drop the column `meaning` on the `Kanji` table. All the data in the column will be lost.
  - You are about to drop the column `readings` on the `Kanji` table. All the data in the column will be lost.
  - You are about to drop the column `kanaId` on the `Particle` table. All the data in the column will be lost.
  - You are about to drop the column `kanjiId` on the `Vocabulary` table. All the data in the column will be lost.
  - You are about to drop the column `partOfSpeech` on the `Vocabulary` table. All the data in the column will be lost.
  - You are about to drop the column `readings` on the `Vocabulary` table. All the data in the column will be lost.
  - Added the required column `example_sentence` to the `Vocabulary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reading` to the `Vocabulary` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Particle" DROP CONSTRAINT "Particle_kanaId_fkey";

-- DropForeignKey
ALTER TABLE "Vocabulary" DROP CONSTRAINT "Vocabulary_kanjiId_fkey";

-- AlterTable
ALTER TABLE "Kana" DROP COLUMN "isParticle";

-- AlterTable
ALTER TABLE "Kanji" DROP COLUMN "gradeLevel",
DROP COLUMN "meaning",
DROP COLUMN "readings",
ADD COLUMN     "kun_reading" TEXT[],
ADD COLUMN     "meanings" TEXT[],
ADD COLUMN     "on_reading" TEXT[];

-- AlterTable
ALTER TABLE "Particle" DROP COLUMN "kanaId";

-- AlterTable
ALTER TABLE "Vocabulary" DROP COLUMN "kanjiId",
DROP COLUMN "partOfSpeech",
DROP COLUMN "readings",
ADD COLUMN     "example_sentence" TEXT NOT NULL,
ADD COLUMN     "part_of_speech" TEXT,
ADD COLUMN     "reading" TEXT NOT NULL;
