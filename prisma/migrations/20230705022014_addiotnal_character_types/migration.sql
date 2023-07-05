/*
  Warnings:

  - Added the required column `additional_character_type` to the `Kana` table without a default value. This is not possible if the table is not empty.
  - Added the required column `column` to the `Kana` table without a default value. This is not possible if the table is not empty.
  - Added the required column `row` to the `Kana` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "KanaVowel" AS ENUM ('A', 'I', 'U', 'E', 'O');

-- CreateEnum
CREATE TYPE "KanaLine" AS ENUM ('K', 'S', 'T', 'N', 'H', 'M', 'Y', 'R', 'W', 'N_M', 'G', 'Z', 'D', 'B', 'P');

-- CreateEnum
CREATE TYPE "AdditionalCharacterType" AS ENUM ('DAKUON', 'HANDAKUON', 'YOUON');

-- AlterTable
ALTER TABLE "Kana" ADD COLUMN     "additional_character_type" "AdditionalCharacterType" NOT NULL,
ADD COLUMN     "column" "KanaLine" NOT NULL,
ADD COLUMN     "row" "KanaVowel" NOT NULL;
