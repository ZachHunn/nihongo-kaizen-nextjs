/*
  Warnings:

  - Changed the type of `row` on the `Kana` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "KanaVowelRow" AS ENUM ('A', 'I', 'U', 'E', 'O');

-- AlterTable
ALTER TABLE "Kana" ALTER COLUMN "additional_character_type" DROP NOT NULL,
ALTER COLUMN "column" DROP NOT NULL,
DROP COLUMN "row",
ADD COLUMN     "row" "KanaVowelRow" NOT NULL;

-- DropEnum
DROP TYPE "KanaVowel";
