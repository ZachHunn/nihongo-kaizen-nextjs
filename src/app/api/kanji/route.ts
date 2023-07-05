import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';
import { AppError, MethodNotAllowedError } from '@/Middleware/ErrorHandling';
import { createKanji, getKanjiList } from '@/repository/KanjiRepo';
import { withValidation } from '@/utils/withValidation';

export const kanjiPostSchema = z.object({
  character: z.string(),
  meanings: z.string().array().nonempty({ message: "Can't be empty" }),
  onReading: z.string().array().nonempty({ message: "Can't be empty" }),
  kunReading: z.string().array().nonempty({ message: "Can't be empty" }),
  strokeCount: z.number(),
  examples: z.string().array().nonempty({ message: "Can't be empty" }),
});

export const GET = async (req: NextRequest) => {
  if (req.method !== 'GET') {
    throw new MethodNotAllowedError();
  }
  try {
    const kanjiList = await getKanjiList();
    return NextResponse.json({ kanjiList });
  } catch (e) {
    throw new AppError(
      500,
      'There was issue getting the Kanji list, please try again!'
    );
  }
};
export const POST = async (req: NextRequest) => {
  if (req.method !== 'POST') {
    throw new MethodNotAllowedError();
  }
  try {
    const data = await req.json();
    const validatedKanjiData = withValidation(kanjiPostSchema, data);
    const kanji = await createKanji(validatedKanjiData);
    return NextResponse.json(kanji);
  } catch (e) {
    throw new AppError(
      500,
      'There was an error trying to add the kanji to the list, please try again'
    );
  }
};
