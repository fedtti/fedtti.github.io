import type { UserConfig } from 'vite';

export default {
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: './',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: 'index.html',
        'assets/css/style': 'src/scss/style.scss',
        'assets/js/app': 'src/ts/app.ts',
        'assets/js/sw': 'src/ts/sw.ts',
      },
    },
  },
} satisfies UserConfig;
