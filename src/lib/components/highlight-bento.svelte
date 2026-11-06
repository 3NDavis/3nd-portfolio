<script lang="ts">
    let data:{ highlight:App.Highlight} = $props();
    // console.log(highlight)

	let styles = $state({
		'bg-color': data.highlight.backgroundColor,
		'border-color': data.highlight.borderColor,
		'color': data.highlight.textColor,
	});
	
	let cssVarStyles = $derived.by(() => Object.entries(styles)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';'));
</script>

<style>
    #highlight{
        background-color: var(--bg-color, red);
        border-color: var(--border-color, black);
        color: var(--color, black);
    }
    hr.none{
        margin-top: 0px;
        margin-left:  0px;
        margin-right:  0px;
        padding-bottom:  0px;
    }
    h4{
        margin-top: .1vw;
        margin-bottom: .1vw;
        font-size: .73vw;
        font-weight: bolder;
    }
    h5{
        font-size: .6vw;
        font-weight: 500;
    }
</style>

<a href={data.highlight.blogSlug} class="highlight growhover" id="highlight" style="{cssVarStyles}">
    <div class="w-2/5 h-full float-start p-2">
        {#await import(`../assets/app-icons/${data.highlight.iconsrc}.png`) then { default: src }}
            <img {src} alt={data.highlight.iconAltText} />
        {/await}
        <!-- <img src="{highlight.highlight.iconsrc}" alt="{highlight.highlight.iconAltText}"> -->
    </div>
    <div class="w-3/5 h-full float-end px-[.4em]">
        <h4 class="justify-self-center pt-[.2em]">{data.highlight.title}</h4>
        <div>
            <hr class="none">
            <h5 class="pt-[.7em]]">{data.highlight.subtitle}</h5>
        </div>
    </div>
</a>