import {
  getKanaList,
  getHiragana,
  getKatakana,
  getHiraganaDakuon,
  getHiraganaHandakuon,
  getHiraganaYouon,
  getKatakanaDakuon,
  getKatakanaHandakuon,
  getKatakanaYouon,
} from '@/repository/KanaRepo';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  AdditionalCharacterType,
  KanaType,
  KanaVowelRow,
} from '@prisma/client';
import prisma from '../../prisma/__mocks__/prisma';
import { kanaArray } from '../testutils/__mocks__/fixtures';

vi.mock('../../prisma/prisma');

describe('Testing Kana Repo Functions', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should retrieve the kana list', async () => {
    prisma.kana.findMany.mockResolvedValue(kanaArray);
    const fullKanaList = await getKanaList();
    expect(fullKanaList).toStrictEqual(kanaArray);
  });

  it('should return hiragana', async () => {
    const filteredKanaList = kanaArray.filter(
      (hiragana) => hiragana.type === KanaType.HIRAGANA
    );
    prisma.kana.findMany.mockResolvedValue(filteredKanaList);
    const hiraganaList = await getHiragana();
    expect(hiraganaList).toStrictEqual(filteredKanaList);
  });

  it('should return Katakana', async () => {
    const filteredKanaList = kanaArray.filter(
      (katakana) => katakana.type === KanaType.KATAKANA
    );
    prisma.kana.findMany.mockResolvedValue(filteredKanaList);
    const katakanaList = await getKatakana();
    expect(katakanaList).toStrictEqual(filteredKanaList);
  });

  it('should return hiragana dakuon', async () => {
    const filteredKanaList = kanaArray.filter(
      (hiraganaDakuon) =>
        hiraganaDakuon.type === KanaType.HIRAGANA &&
        hiraganaDakuon.additionalCharacterType ===
          AdditionalCharacterType.DAKUON
    );
    prisma.kana.findMany.mockResolvedValue(filteredKanaList);
    const hiraganaDakuon = await getHiraganaDakuon();
    console.log(hiraganaDakuon);
    console.log(filteredKanaList);
    expect(hiraganaDakuon).toStrictEqual(filteredKanaList);
  });

  it('should return hiragana handakuon', async () => {
    const filteredKanaList = kanaArray.filter(
      (hiraganaHandakuon) =>
        hiraganaHandakuon.type === KanaType.HIRAGANA &&
        hiraganaHandakuon.additionalCharacterType ===
          AdditionalCharacterType.HANDAKUON
    );
    prisma.kana.findMany.mockResolvedValue(filteredKanaList);
    const hiriganaHandakuon = await getHiraganaHandakuon();
    expect(hiriganaHandakuon).toStrictEqual(filteredKanaList);
  });

  it('should return hiragana youon', async () => {
    const filteredKanaList = kanaArray.filter(
      (hiragnaYouon) =>
        hiragnaYouon.type === KanaType.HIRAGANA &&
        hiragnaYouon.additionalCharacterType === AdditionalCharacterType.YOUON
    );
    prisma.kana.findMany.mockResolvedValue(filteredKanaList);
    const hiraganaYouon = await getHiraganaYouon();
    expect(hiraganaYouon).toStrictEqual(filteredKanaList);
  });

  it('should return katakana dakuon', async () => {
    const filteredKanaList = kanaArray.filter(
      (katakanaDakuon) =>
        katakanaDakuon.type === KanaType.HIRAGANA &&
        katakanaDakuon.additionalCharacterType ===
          AdditionalCharacterType.DAKUON
    );
    prisma.kana.findMany.mockResolvedValue(filteredKanaList);
    const katakanaDakuon = await getKatakanaDakuon();
    expect(katakanaDakuon).toStrictEqual(filteredKanaList);
  });

  it('should return Katakana handakuon', async () => {
    const filteredKanaList = kanaArray.filter(
      (katakanaHandakuon) =>
        katakanaHandakuon.type === KanaType.HIRAGANA &&
        katakanaHandakuon.additionalCharacterType ===
          AdditionalCharacterType.DAKUON
    );
    prisma.kana.findMany.mockResolvedValue(filteredKanaList);
    const katakanaHandakuon = await getKatakanaHandakuon();
    expect(katakanaHandakuon).toStrictEqual(filteredKanaList);
  });

  it('should return Katakana youon', async () => {
    const filteredKanaList = kanaArray.filter(
      (katakanaYouon) =>
        katakanaYouon.type === KanaType.HIRAGANA &&
        katakanaYouon.additionalCharacterType === AdditionalCharacterType.DAKUON
    );
    prisma.kana.findMany.mockResolvedValue(filteredKanaList);
    const katakanaYouon = await getKatakanaYouon();
    expect(katakanaYouon).toStrictEqual(filteredKanaList);
  });
});
