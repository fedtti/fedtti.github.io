import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) { },
  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    supportFile: false,
    specPattern: '**/*.cy.ts',
  },
});
