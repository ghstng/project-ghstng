import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import yaml from '@rollup/plugin-yaml';
import sitemap from '@astrojs/sitemap';
import prefetch from "@astrojs/prefetch";
import remarkBreaks from 'remark-breaks';

export default defineConfig({
  site: 'https://ghstng.com',
  integrations: [
    mdx({
      remarkPlugins: [remarkBreaks],
    }), 
    sitemap(), 
    prefetch(), 
  ],
  vite: {
    plugins: [
      yaml()
    ],
  },
});