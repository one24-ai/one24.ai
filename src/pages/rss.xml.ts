import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts } from "../posts";
import { SITE } from "../site";

export async function GET(context: APIContext) {
	const site = context.site ?? new URL(SITE.url);
	const posts = await getPosts();
	return rss({
		title: `${SITE.name}: writing`,
		description: SITE.description,
		site,
		xmlns: { atom: "http://www.w3.org/2005/Atom" },
		customData: [
			"<language>en</language>",
			`<atom:link href="${new URL("/rss.xml", site)}" rel="self" type="application/rss+xml"/>`,
		].join(""),
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/writing/${post.id}/`,
			// Full post body, with site-relative links made absolute so they work in feed readers.
			content: absolutize(post.rendered?.html ?? "", site),
		})),
	});
}

function absolutize(html: string, site: URL) {
	return html.replace(/(href|src)="(\/[^/"][^"]*)"/g, (_, attr, path) => `${attr}="${new URL(path, site)}"`);
}
