import React from 'react';
import { RenderOptions, cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from '@/components/SnackbarProvider';
import { AnimatePresence } from 'framer-motion';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

afterEach(() => cleanup());

type ProviderProps = {
  children: React.ReactElement;
};

const testQueryClient = new QueryClient();
const AllTheProviders: React.FC<ProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={testQueryClient}>
      <SnackbarProvider>
        <AnimatePresence mode="wait" initial={false}>
          {children}
        </AnimatePresence>
        <ReactQueryDevtools initialIsOpen={false} />
      </SnackbarProvider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
