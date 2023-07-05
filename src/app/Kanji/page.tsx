'use client';

import React from 'react';
import { useCreateKanji, useKanjiList } from '@/hooks/kanji';
import { useSnackbar } from '@/components/SnackbarProvider';
import { z } from 'zod';

const KanjiPage = () => {
  const { data: kanjiList } = useKanjiList();
  const { mutate: createKanji } = useCreateKanji();
  const { showSnackbarMessage } = useSnackbar();

  console.log(kanjiList);
  return (
    <div>
      <h1>Kanji Page</h1>
    </div>
  );
};

export default KanjiPage;
