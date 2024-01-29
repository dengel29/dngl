import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";
import netlify from '@astrojs/netlify';
// @see https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/#modes

// https://astro.build/config
export default defineConfig({
  integrations: [lit()],
  output: "server",
  adapter: netlify({edgeMiddleware: true})
});