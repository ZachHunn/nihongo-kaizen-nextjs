'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SnackbarProvider } from '@/components/SnackbarProvider';

const queryClient = new QueryClient();
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <AnimatePresence mode="wait" initial={false}>
          {children}
        </AnimatePresence>
        <ReactQueryDevtools initialIsOpen={false} />
      </SnackbarProvider>
    </QueryClientProvider>
  );
};
