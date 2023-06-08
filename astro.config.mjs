import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import bookshop from "@bookshop/astro-bookshop";
// https://github.com/i40west/netlify-cms-cloudflare-pages
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
	site: "https://sendit-astro-template.pages.dev",
	integrations: [
		// NetlifyCMS({
		// 	config: {
		// 		backend: {
		// 			name: "github",
		// 			repo: "zk-g/sendit-astro-template",
		// 			branch: "main",
		// 			base_url: "https://sendit-astro-template.pages.dev",
		// 			auth_endpoint: "/api/auth",
		// 		},
		// 		collections: [
		// 			// Content collections
		// 			{
		// 				name: "posts",
		// 				label: "Blog Posts",
		// 				folder: "src/content/blog",
		// 				create: true,
		// 				delete: true,
		// 				fields: [
		// 					{ name: "title", widget: "string", label: "Post Title" },
		// 					{ name: "body", widget: "markdown", label: "Post Body" },
		// 				],
		// 			},
		// 		],
		// 	},
		// }),
		bookshop(),
		react(),
	],
});
