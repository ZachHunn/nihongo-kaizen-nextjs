'use client';

import { Kanji } from '@prisma/client';
import axios, { AxiosResponse } from 'axios';
import { ESnackbarVariant, EUri } from '@/const/enums';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { KanjiDTO } from '@/types';
import { useSnackbar } from '@/components/SnackbarProvider';

export const kanjiQueryKeys = {
  kanjiList: () => ['kanjiList'],
  kanji: (id: number) => ['kanji', id],
};

export const useKanjiList = () => {
  return useQuery<Kanji[]>(kanjiQueryKeys.kanjiList(), () => {
    return axios
      .get<KanjiDTO>(EUri.KANJI)
      .then((results) => results.data.kanjiList);
  });
};

export type NewKanji = Omit<Kanji, 'id'>;
export const useCreateKanji = () => {
  const queryClient = useQueryClient();
  const { showSnackbarMessage } = useSnackbar();
  return useMutation<AxiosResponse<Kanji>, unknown, NewKanji>(
    (kanji: NewKanji) => axios.post<Kanji>(EUri.KANJI, kanji),
    {
      onError: () => {
        showSnackbarMessage({
          message: 'There was an error trying to add the Kanji',
          variant: ESnackbarVariant.ERROR,
        });
      },
      onSettled: () => {
        queryClient.invalidateQueries(kanjiQueryKeys.kanjiList());
      },
    }
  );
};
