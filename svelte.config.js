import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      // GitHub Pages handles compression
      precompress: false,
      // Fallback page for client-side routing
      fallback: '404.html',
      // Fail build if dynamic routes are detected
      strict: true
    })
  },

  compilerOptions: {
    runes: true
  }
};

export default config;
