import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [lit()],
  output: "hybrid",
  adapter: cloudflare({routes: 'auto', mode: 'advanced'}) // @see https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/#modes
});