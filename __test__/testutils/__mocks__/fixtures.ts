import {
  KanaType,
  KanaVowelRow,
  KanaLine,
  AdditionalCharacterType,
} from '@prisma/client';

export const kanaArray = [
  // Hiragana
  {
    id: 1,
    character: 'あ',
    reading: 'a',
    type: KanaType.HIRAGANA,
    row: KanaVowelRow.A,
    column: null,
    additionalCharacterType: null,
  },
  // Add more hiragana characters here...

  // Katakana
  {
    id: 2,
    character: 'ア',
    reading: 'a',
    type: KanaType.KATAKANA,
    row: KanaVowelRow.A,
    column: null,
    additionalCharacterType: null,
  },
  // Add more katakana characters here...

  // Dakuon (Hiragana)
  {
    id: 3,
    character: 'が',
    reading: 'ga',
    type: KanaType.HIRAGANA,
    row: KanaVowelRow.A,
    column: KanaLine.G,
    additionalCharacterType: AdditionalCharacterType.DAKUON,
  },
  // Add more dakuon (hiragana) characters here...

  // Dakuon (Katakana)
  {
    id: 4,
    character: 'ガ',
    reading: 'ga',
    type: KanaType.KATAKANA,
    row: KanaVowelRow.A,
    column: KanaLine.G,
    additionalCharacterType: AdditionalCharacterType.DAKUON,
  },
  // Add more dakuon (katakana) characters here...

  // Handakuon (Hiragana)
  {
    id: 5,
    character: 'ぱ',
    reading: 'pa',
    type: KanaType.HIRAGANA,
    row: KanaVowelRow.A,
    column: KanaLine.P,
    additionalCharacterType: AdditionalCharacterType.HANDAKUON,
  },
  // Add more handakuon (hiragana) characters here...

  // Handakuon (Katakana)
  {
    id: 6,
    character: 'パ',
    reading: 'pa',
    type: KanaType.KATAKANA,
    row: KanaVowelRow.A,
    column: KanaLine.P,
    additionalCharacterType: AdditionalCharacterType.HANDAKUON,
  },
  // Add more handakuon (katakana) characters here...

  // Youon (Hiragana)
  {
    id: 7,
    character: 'きゃ',
    reading: 'kya',
    type: KanaType.HIRAGANA,
    row: KanaVowelRow.A,
    column: KanaLine.K,
    additionalCharacterType: AdditionalCharacterType.YOUON,
  },
  // Add more youon (hiragana) characters here...

  // Youon (Katakana)
  {
    id: 8,
    character: 'キャ',
    reading: 'kya',
    type: KanaType.KATAKANA,
    row: KanaVowelRow.A,
    column: KanaLine.K,
    additionalCharacterType: AdditionalCharacterType.YOUON,
  },
  // Add more youon (katakana) characters here...

  // Add more kana characters as needed...
];
