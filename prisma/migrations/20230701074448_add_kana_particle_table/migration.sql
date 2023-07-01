-- CreateEnum
CREATE TYPE "KanaType" AS ENUM ('HIRAGANA', 'KATAKANA');

-- CreateEnum
CREATE TYPE "ParticleType" AS ENUM ('SUBJECT', 'TOPIC', 'OBJECT', 'INDICATIVE', 'QUOTATION', 'LISTING', 'DIRECTION', 'SOURCE', 'RANGE', 'INCLUSIVE', 'POSSESSIVE', 'CONFIRMING', 'ASSERTIVE', 'QUESTION', 'EXTENT');

-- CreateTable
CREATE TABLE "Kana" (
    "id" SERIAL NOT NULL,
    "character" TEXT NOT NULL,
    "reading" TEXT NOT NULL,
    "type" "KanaType" NOT NULL,
    "isParticle" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Kana_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Particle" (
    "id" SERIAL NOT NULL,
    "character" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "type" "ParticleType" NOT NULL,
    "explanation" TEXT,
    "kanaId" INTEGER NOT NULL,

    CONSTRAINT "Particle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kana_id_key" ON "Kana"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Kana_character_key" ON "Kana"("character");

-- CreateIndex
CREATE UNIQUE INDEX "Particle_id_key" ON "Particle"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Particle_character_key" ON "Particle"("character");

-- AddForeignKey
ALTER TABLE "Particle" ADD CONSTRAINT "Particle_kanaId_fkey" FOREIGN KEY ("kanaId") REFERENCES "Kana"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
