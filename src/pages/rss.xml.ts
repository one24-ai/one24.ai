import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts } from "../posts";
import { SITE } from "../site";

export async function GET(context: APIContext) {
	const posts = await getPosts();
	return rss({
		title: `${SITE.name}: writing`,
		description: SITE.description,
		site: context.site ?? SITE.url,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/writing/${post.id}/`,
		})),
	});
}
