import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
// @see https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/#modes
export default defineConfig({
  integrations: [lit()],
  output: "server",
  adapter: cloudflare({mode: 'directory'}) 
});