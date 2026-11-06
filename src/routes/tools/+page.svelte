<script lang="ts">
	import type { PageData } from './$types';
	let {data}:{data: PageData} = $props();
</script>

<div-center>
    <full-bento>
        <bento-box>
            {#each data.posts as { slug, title, description }}
            <div class="mb-[2vw]">
                <a href="{slug}">
                    <h1>{title}</h1>
                    <h3 class="txtor">{description}</h3>
                </a>
            </div>
            {/each}
        </bento-box>
    </full-bento>
</div-center>