<script lang="ts">
// @ts-nocheck
    import Socials from '#lib/components/socials.svelte';
    import Highlight from '#lib/components/highlight-bento.svelte';
    import About from "./about.md"
    
    import { Gallery, Popover } from "flowbite-svelte";
    const projects = [
        { alt: "Right As Rain", src: "/app-icons/right-as-rain.png" },
        { alt: "Shooting Star", src: "/app-icons/shooting-star.png" },
        { alt: "Grid Combat Tetris", src: "/app-icons/synthset.png" },
    ];
        const tools = [
        { alt: "Shared Values", src: "/app-icons/shared-value.png", popoverTitle: "Shared Values", popoverContent:"A unity inspector dependency injection framework" },
        { alt: "Gizmo Extensions", src: "/app-icons/so-controller.png", popoverTitle: "Scriptable Object Character Controller", popoverContent:"A codeless reprogrammable character controller" },
        { alt: "Perspective", src: "/app-icons/perspective.png", popoverTitle: "Perspective Builder", popoverContent:"Move an object while retaining an object's position relative to a perspective" },
    ];

    let { data } = $props();
</script>

<style>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .mobileWidth{
        width: 100%;
        flex: content;
    }
}
</style>

<div-center class="pt-[3vw]">
    <full-bento>
        <div class="w-3/4 h-full float-start mobileWidth">
            <div class="w-full h-5/7">
            <!-- about -->
                <div class="w-3/5 h-full float-start padded mobileWidth">
                    <bento-box class="full ">
                        <div class="h-85/100 mr-[4vw]">
                            <h2 class="mt-1 pb-2">Hi, I'm Ethan Davis.</h2>
                            <About/>
                        </div>
                        <div class="absolute bottom-2/100 h-1/10 w-[96%]">
                            <Socials/>
                        </div>
                    </bento-box>
                </div>
            <!-- highlight -->
                <div class="w-2/5 h-full float-end padded mobileWidth">
                    <!-- <a href="/highlights"> -->
                        <bento-box class="full">
                            <bento-label>Highlights</bento-label>
                            <div class="h-8/10 mx-[.5vw] my-[1vw] grid grid-rows-2 gap-y-5">
                                {#each data.highlights as highlight, i}
                                    <div class="h-full">
                                        <Highlight {highlight}/>
                                    </div>
                                {/each}
                            </div>
                        </bento-box>
                    <!-- </a> -->
                </div>
            </div>
            <div class="h-2/7">
            <!-- projects -->
                <div class="w-1/2 h-full float-start padded mobileWidth">
                    <a href="/projects">
                        <!-- <bento-box class="full"> -->
                        <bento-box class="hoverable full">
                            <bento-label>Projects</bento-label>
                            <div class="h-[80%] w-full p-[5%] content-center">
                                <Gallery items={projects} class="mx-2 gap-[1.5vw] md:grid-cols-3 md:growhover">
                                    {#snippet figure(item)}
                                            <img class="growhover" src={item.src} alt={item.alt} />
                                    {/snippet}
                                </Gallery>
                            </div>
                        </bento-box>
                    </a>
                </div>
            <!-- tools -->
                <div class="w-1/2 h-full float-end padded">
                    <a href="/tools">
                        <bento-box class="hoverable full">
                            <bento-label>Tools</bento-label>
                                <div class="h-[80%] w-full p-[5%] content-center">
                                    <div>
                                        <Gallery items={tools} class="mx-2 gap-[1.5vw] md:grid-cols-3">
                                            {#snippet figure(item)}
                                                <img class="growhover" src={item.src} alt={item.alt} />
                                                <Popover class="popover text-[.6vw]" title={item.popoverTitle}>{item.popoverContent}</Popover>
                                            {/snippet}
                                        </Gallery>
                                    </div>
                            </div>
                        </bento-box>
                    </a>
                </div>
            </div>
        </div>
        <!-- Right Pillar -->
        <div class="w-1/4 h-full float-end">
        <!-- skills -->
            <div class="w-full h-5/6 padded">
                <bento-box class="full">
                    <bento-label>Skills</bento-label>
                    <div class="px-[.3vw]">
                        {#each data.skills as {title, skills}}
                            <div class="mt-[1vw]]">
                                <h4 class="static text-[1.2vw] pb-[1vw]">{title}</h4>
                                    <div class="grid grid-cols-3 gap-[.5vw]">
                                        {#each skills as skill}
                                            <skill-label>{skill}</skill-label>
                                        {/each}
                                </div>
                                <hr class="skill-divider" />
                            </div>
                        {/each}
                    </div>
                </bento-box>
            </div>
    
        <!-- languages -->
            <div class ="w-full h-1/6 padded">
                <bento-box class="full">
                    <bento-label>Languages</bento-label>
                    <div class="px-[.3vw] mt-1 mb-1 grid grid-cols-3 gap-[.5vw]">
                        {#each data.languages as {language}}
                            <skill-label>{language}</skill-label>
                        {/each}
                    </div>
                </bento-box>
            </div>
        </div>
    </full-bento>
</div-center>