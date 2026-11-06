<script lang="ts">
    import email from '#lib/assets/email-orange-circle.svg';

    import Socials from './Socials.json'
    
    function openEmail(){
        window.location.href = "mailto:ethanongeneral@gmail.com"
    }
</script>

<div class="h-full grid-cols-10 gap-[.5vw] flex">
    <button onclick={openEmail}>
        <img class="h-full growhover" alt="Email" src={email} />
    </button>
    {#each Socials.Socials as {image, link, altText}}
        {#await import(`../assets/social-icons/${image}.svg`) then { default: src }}
            <a href={link}>
                <img {src} alt={altText} class="h-full growhover" />
            </a>
        {/await}
    {/each}
</div>