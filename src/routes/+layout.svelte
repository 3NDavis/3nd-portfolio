<script lang="ts">
	import "../app.css";
	import favicon from '#lib/assets/favicon.png';

	import { fade } from 'svelte/transition';
	import type { LayoutProps } from './$types';
	let { children,data }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#key data.pathname}
	<div in:fade={{ duration: 300, delay: 200}} out:fade={{ duration: 300 }}>
		{@render children()}
	</div>
{/key}