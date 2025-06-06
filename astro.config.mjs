// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    output: "static",
    adapter: vercel(),
    vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components')
      }
    }
  }
});