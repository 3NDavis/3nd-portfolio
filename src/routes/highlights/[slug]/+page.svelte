<script lang="ts">
	import type { PageData } from './$types';
    
	let data:{data:PageData} = $props();
    
    import type { Component } from 'svelte';
	let MDComponent = data.data.component as unknown as Component;
</script>

<div class="absolute">
	<h1>{data.data.frontmatter.title}</h1>
	<h2>{data.data.frontmatter.description}</h2>
	<MDComponent />

</div>
