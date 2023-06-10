import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import bookshop from "@bookshop/astro-bookshop";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
	site: "https://sendit-astro-template.pages.dev",
	integrations: [
		bookshop(),
		react(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
			cacheDir: "./.cache/image"
		}),
	],
});
