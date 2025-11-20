// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://schenierlopez.es',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['gsap'],
            animations: ['./src/scripts/animations.ts']
          }
        }
      }
    }
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