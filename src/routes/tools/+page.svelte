<script lang="ts">
	import type { PageData } from './$types';
	let {data}:{data: PageData} = $props();
</script>

<style>
h1{
    font-size:4vw;
}
</style>

<h1 class="text-center w-full">Tools</h1>
<div-center>
    <full-bento>
        <bento-box class="full">
            {#each data.posts as { slug, title, description }}
            <div class="mb-[2vw]">
                <a href="{slug}">
                    <h2>{title}</h2>
                    <h4 class="txtor">{description}</h4>
                </a>
            </div>
            {/each}
        </bento-box>
    </full-bento>
</div-center>