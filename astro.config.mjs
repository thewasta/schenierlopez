import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://schenierlopez.es',
  output: 'static',
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()]
  },

  image: {
    domains: ['images.unsplash.com', 'github.com'],
    format: ['webp', 'avif', 'jpeg']
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },

  devToolbar: {
    enabled: false
  }
});
