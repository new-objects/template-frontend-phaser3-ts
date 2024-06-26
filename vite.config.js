import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import process from 'process';

export default defineConfig({
  base:
    process.env.DEPLOY_ENV === 'gh-pages'
      ? '/template-frontend-phaser3-ts/'
      : '/',
  plugins: [
    eslintPlugin({
      cache: false,
      failOnError: false,
    }),
  ],
  assetsInclude: ['**/*.mp3', '**/*.jpeg', '**/*.png', '**/*.task'],
});
