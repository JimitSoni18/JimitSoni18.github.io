import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://JimitSoni18.github.io/",
	integrations: [tailwind()],
});
