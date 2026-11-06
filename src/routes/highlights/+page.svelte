<script lang="ts">
	import type { PageData } from './$types';
	let data: PageData = $props();
</script>

<full-bento>
    <bento-box>
        <h1>Hightlights</h1>
        {#each data.posts as { slug, title, description }}
            <div>
                <a href="{slug}">
                    <h1>{title}</h1>
                </a>
                <h3>{description}</h3>
            </div>
        {/each}
    </bento-box>
</full-bento>