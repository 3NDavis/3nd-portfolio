<script lang="ts">
	import type { PageData } from './$types';
    
	let data:{data:PageData} = $props();
    
	let styles = $state({
		'bg-color': data.data.frontmatter.backgroundColor,
		'border-color': data.data.frontmatter.borderColor,
		'color': data.data.frontmatter.textColor,
	});
	
	let textStyle = $state({
		'color': data.data.frontmatter.backgroundColor,
	})
	
	let cssVarStyles = $derived.by(() => Object.entries(styles)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';'));

	let cssTextVarStyles = $derived.by(() => Object.entries(textStyle)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';'));

    import type { Component } from 'svelte';
	let MDComponent = data.data.component as unknown as Component;
</script>

<style>
    #blog{
        background-color: var(--bg-color, #350A0CCC);
        border-color: var(--border-color, #FD763FFF);
        color: var(--color, #FD763FFF);
    }
	#blogText{
        color: var(--color, #FD763FFF);
	}
	h1{
		font-size: 4vw;
	}
	h2{
		font-size: 2vw;
	}
	h3{
		font-size: 1vw;
		font-weight: bold;
	}
	p{
		font-size: 1vw;
	}
	.padded{
		padding-left: 2%;
		padding-right: 2%;
		padding-top: 1%;
		padding-bottom: 1%;
	}
</style>

<div-center>
	<div class="w-2/3">
		<h1 id="blogText" style={cssTextVarStyles}>{data.data.frontmatter.title}</h1>
		<h2 id="blogText" style={cssTextVarStyles}>{data.data.frontmatter.description}</h2>
		<div class="pt-[.5vw]">
			<bento-box id="blog" style={cssVarStyles}>
				<h3 class="text-center">Skills</h3>
				<div class="padded">
					{#each data.data.frontmatter.skills as skill}
						<skill-label class="match mx-[.1vw]">{skill}</skill-label>
					{/each}
				</div>
			</bento-box>
		</div>
		<bento-box class="mt-[1vw]" id="blog" style={cssVarStyles}>
			<MDComponent />
		</bento-box>
	</div>
</div-center>
