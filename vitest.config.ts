// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    include: ['tests/unit/**/*.test.tsx'], // Only run Vitest on unit tests
    exclude: ['tests/e2e/**/*'], // Exclude Playwright E2E tests
  },
});
