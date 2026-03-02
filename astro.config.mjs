// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.s3aindustrial.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Página de inicio: máxima prioridad
        if (item.url === 'https://www.s3aindustrial.com/') {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        // Servicios y contacto: alta prioridad
        if (item.url.includes('/servicios') || item.url.includes('/contacto')) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        // Resto de páginas
        return { ...item, priority: 0.7, changefreq: 'monthly' };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  },
});