import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      exclude: ['__test__/testutils/**/*', 'prisma/**/*'],
    },

    reporters: ['default', 'html'],
    globals: true,
    setupFiles: './__test__/testutils/mocks/setupTests.ts',
    css: false,
  },
  resolve: {
    alias: {
      '@/prisma': './prisma',
      '@/components': '/src/components',
      '@/const': '/src/const',
      '@/repository': '/src/repository',
      '@/types': '/src/types',
      '@/utils': '/src/utils',
    },
  },
});
