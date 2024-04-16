import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [lit()],
  output: "server",
  adapter: netlify({edgeMiddleware: true, imageCDN: false,}),
  vite: {define: {
    __IMAGE_URL__: JSON.stringify('https://dngl-bucket.s3.amazonaws.com/')
  }}
});