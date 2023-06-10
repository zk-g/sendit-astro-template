import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
	branch,
	clientId: process.env.TINA_CLIENT_ID ?? null, // Get this from tina.io
	token: process.env.TINA_TOKEN ?? null, // Get this from tina.io

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "images",
			publicFolder: "public",
		},
	},
	schema: {
		collections: [
			{
				name: "post",
				label: "Posts",
				path: "src/content/blog",
				fields: [
					{
						name: "title",
						label: "Title",
						type: "string",
						isTitle: true,
						required: true,
					},
					{
						name: "date",
						label: "Date",
						type: "datetime",
						ui: {
							dateFormat: "DD MMMM YYYY",
						},
					},
					{
						name: "tags",
						label: "Tags",
						type: "string",
						list: true,
					},
					{
						name: "author",
						label: "Author",
						type: "string",
						options: ["Aaron Britt", "Miyah Kelley", "Wendy Parkes", "Gerard Hopper", "Arther Conal", "Nathan", "Tina", "Kendall"],
					},
					{
						name: "thumb_image",
						label: "Thumbnail Image",
						type: "object",
						fields: [
							{
								name: "image",
								label: "Image",
								type: "image",
							},
							{
								name: "image_alt",
								label: "Image Alt",
								type: "string",
							},
						],
					},
					{
						name: "featured_image",
						label: "Featured Image",
						type: "object",
						fields: [
							{
								name: "image",
								label: "Image",
								type: "image",
							},
							{
								name: "image_alt",
								label: "Image Alt",
								type: "string",
							},
						],
					},
					{
						name: "seo",
						label: "SEO",
						type: "object",
						fields: [
							{
								name: "page_description",
								label: "Page Description",
								type: "string",
							},
							{
								name: "canonical_url",
								label: "Canonical URL",
								type: "string",
							},
							{
								name: "featured_image",
								label: "Featured Image",
								type: "image",
							},
							{
								name: "featured_image_alt",
								label: "Featured Image Alt",
								type: "string",
							},
							{
								name: "author_twitter_handle",
								label: "Author Twitter Handle",
								type: "string",
							},
							{
								name: "open_graph_type",
								label: "Open Graph Type",
								type: "string",
							},
							{
								name: "no_index",
								label: "No Index",
								type: "boolean",
							},
						],
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
			},
			{
				name: "pages",
				label: "Pages",
				path: "src/content/pages",
				fields: [
					{
						name: "title",
						label: "Title",
						type: "string",
						isTitle: true,
						required: true,
					},
					{
						name: "description",
						label: "Description",
						type: "string",
					},
					{
						name: "seo",
						label: "SEO",
						type: "object",
						fields: [
							{
								name: "page_description",
								label: "Page Description",
								type: "string",
							},
							{
								name: "canonical_url",
								label: "Canonical URL",
								type: "string",
							},
							{
								name: "featured_image",
								label: "Featured Image",
								type: "image",
							},
							{
								name: "featured_image_alt",
								label: "Featured Image Alt",
								type: "string",
							},
							{
								name: "author_twitter_handle",
								label: "Author Twitter Handle",
								type: "string",
							},
							{
								name: "open_graph_type",
								label: "Open Graph Type",
								type: "string",
							},
							{
								name: "no_index",
								label: "No Index",
								type: "boolean",
							},
						],
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
			},
		],
	},
});
