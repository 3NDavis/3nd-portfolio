<script lang="ts">
    import { Tooltip } from 'flowbite-svelte';

    import email from '#lib/assets/email-orange-circle.svg';
    import doc from '#lib/assets/document-orange-circle.svg';

    import Socials from './Socials.json'
    
    function openEmail(){
        window.location.href = "mailto:ethanongeneral@gmail.com"
    }
</script>

<div class="grid-cols-8 gap-[.5vw] grid">
    <button onclick={openEmail}>
        <Tooltip class="tooltip" arrow={false}>Email</Tooltip>
        <img class="h-full growhover" alt="Email" src={email} />
    </button>
    {#each Socials.Socials as {image, link, altText}}
        {#await import(`../assets/social-icons/${image}.svg`) then { default: src }}
            <a href={link}>
                <Tooltip class="tooltip" arrow={false}>{altText}</Tooltip>
                <img {src} alt={altText} class="h-full growhover" />
            </a>
        {/await}
    {/each}
    <a class="col-start-8 col-end-8" href="/resume">
                <Tooltip class="tooltip" arrow={false}>Resumé</Tooltip>
        <img class="h-full growhover" alt="Resumé" src={doc} />
    </a>
</div>