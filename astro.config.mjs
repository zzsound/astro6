// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://zzsound.github.io',
    base: '/astro6/',
    trailingSlash: 'always', // Asegura que los enlaces terminen con /
  });
