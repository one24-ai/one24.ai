import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		// Drafts render in `pnpm dev` only, never in the build.
		draft: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
	schema: z.object({
		name: z.string(),
		summary: z.string(),
		// "pi-package" extends pi; "project" is standalone (Kiln is not a pi package).
		kind: z.enum(["pi-package", "project"]),
		status: z.enum(["released", "in design"]),
		version: z.string().optional(),
		repo: z.url().optional(), // omit until the repo is public
		npm: z.url().optional(),
		order: z.number(),
	}),
});

export const collections = { blog, projects };
