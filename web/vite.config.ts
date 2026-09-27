import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '/creator5-maintenance/',
  plugins: [react()],
  test: {
    css: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
