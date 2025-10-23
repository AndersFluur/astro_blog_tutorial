// @ts-check
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

export default defineConfig({
  site: "https://astroblog42.netlify.app",
  integrations: [react()]
});