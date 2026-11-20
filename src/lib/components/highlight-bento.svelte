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
        height: 100%;
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
        font-size: 1.1vw;
        font-weight: bolder;
        text-align: center;
    }
    h5{
        font-size: .65vw;
        font-weight: 500;
        text-align: center;
    }
    .bordered{
        -webkit-text-stroke: .01vw black;
    }

</style>

<a href={data.highlight.blogSlug} class="highlight growhover" id="highlight" style={cssVarStyles}>
    <div>
        {#await import(`../assets/highlight-icons/${data.highlight.iconsrc}.png`) then { default: src }}
            <img src={src} class="relative object-cover h-full w-full" alt={data.highlight.iconAltText} />
        {/await}
        <div class="relative w-full bottom-[4.6vw] px-[.4vw]">
            <h4 class="pt-[.2em] bordered">{data.highlight.title}</h4>
            <div>
                <hr class="none">
                <h5 class="pt-[.7em] bordered">{data.highlight.subtitle}</h5>
            </div>
        </div>
    </div>
</a>