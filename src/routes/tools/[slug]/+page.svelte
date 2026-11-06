<script lang="ts">
	import type { PageData } from './$types';
    
	let data:{data:PageData} = $props();
    
    import type { Component } from 'svelte';
	let MDComponent = data.data.component as unknown as Component;
</script>

<style>
	h1{
		font-size: 4vw;
	}
	h2{
		font-size: 2vw;
	}
	p{
		font-size: 1vw;
	}
</style>

<div class="pt-10 absolute justify-self-center w-2/3">
	<h1>{data.data.frontmatter.title}</h1>
	<h2>{data.data.frontmatter.description}</h2>
	<bento-box class="mt-[3vw]">
		<MDComponent />
	</bento-box>
</div>
