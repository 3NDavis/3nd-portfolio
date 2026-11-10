// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}

	interface MdsvexFile {
		default: import('svelte/internal').SvelteComponent;
		metadata: Record<string, string>;
	}

	type MdsvexResolver = () => Promise<MdsvexFile>;

	interface BlogPost {
		slug: string;
		title: string;
		description: string;
		published: boolean;
		highlight: boolean;

		backgroundColor: string;
		borderColor: string;
		textColor: string;

		iconsrc: string;
		iconAltText: string;
		
		skills: Array<string>;
	}

	interface Highlight{
		title: string;
		subtitle: string;

		blogSlug: string;

		iconsrc: string;
		iconAltText: string;

		borderColor: string;
		backgroundColor: string;
		textColor: string;
	}
}
