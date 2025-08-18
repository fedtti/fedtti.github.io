import type { UserConfig } from 'vite';

export default {
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: './',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'assets/css/style': 'src/scss/style.scss',
        'assets/js/app': 'src/ts/app.ts',
        index: 'index.html',
        sw: 'src/ts/sw.ts',
      },
      output: [
        {
          entryFileNames: '[name].js',
        }
      ]
    },
  },
} satisfies UserConfig;
