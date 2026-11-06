import type { PageServerLoad } from './$types';
import { slugFromPath } from '#lib/slugFromPath.ts';

const MAX_POSTS = 10;

export const load: PageServerLoad = async ({ url }) => {
	const modules = import.meta.glob(`/src/posts/tools/*.{md,svx,svelte.md}`);
	console.log({modules})

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: "/tools/blog/"+slugFromPath(path),
					...(post as unknown as App.MdsvexFile).metadata
				} as App.BlogPost)
		)
	);
	const posts = await Promise.all(postPromises);
	const publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS);
	const publishedHighlights = publishedPosts.filter((post) => post.highlight);

	return { posts: publishedHighlights };
};