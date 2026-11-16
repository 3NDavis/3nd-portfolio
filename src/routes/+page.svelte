<script lang="ts">
// @ts-nocheck
    import Socials from '#lib/components/socials.svelte';
    import Highlight from '#lib/components/highlight-bento.svelte';
    import About from "./about.md"
    
    import { Gallery, Carousel, CarouselIndicators } from "flowbite-svelte";
    const projects = [
        { alt: "Right As Rain", src: "/app-icons/right-as-rain.png" },
        { alt: "Shooting Star", src: "/app-icons/shooting-star.png" },
        { alt: "Grid Combat Tetris", src: "/app-icons/synthset.png" },
        { alt: "Sol Survivor", src: "/app-icons/sol-survivor.png" },
    ];
    const leftTools = [
        { alt: "Gizmo Extensions", src: "/app-icons/gizmo-extensions.png" },
        { alt: "c", src: "/app-icons/right-as-rain.png" },
    ];
    const rightTools = [
        { alt: "Shared Values", src: "/app-icons/shared-val-float.png" },
        { alt: "b", src: "/app-icons/shooting-star.png" },
    ];

    let { data } = $props();
</script>

<div-center class="pt-[3vw]">
    <full-bento>
        <div class="w-3/4 h-full float-left">
            <div class="w-full h-3/5">
            <!-- about -->
                <div class="w-2/3 h-full float-left padded">
                    <bento-box class="full">
                        <div class="h-85/100 aboutmarginright">
                            <h2 class="mt-1 pb-2">Hi, I'm Ethan Davis.</h2>
                            <About/>
                        </div>
                        <div class="absolute bottom-2/100 left-2/100 h-1/10 grid-cols-10">
                            <Socials/>
                        </div>
                    </bento-box>
                </div>
            <!-- highlight -->
                <div class="w-1/3 h-full float-right padded">
                    <!-- <a href="/highlights"> -->
                        <bento-box class="full">
                            <bento-label>Highlights</bento-label>
                            <div class="h-9/10 mx-[.5vw] py-[.5vw]">
                                {#each data.highlights as highlight, i}
                                    <Highlight {highlight}/>
                                {/each}
                            </div>
                        </bento-box>
                    <!-- </a> -->
                </div>
            </div>
            <div class="h-2/5">
            <!-- projects -->
                <div class="w-1/2 h-full float-left padded">
                    <a href="/projects">
                        <!-- <bento-box class="full"> -->
                        <bento-box class="hoverable full">
                            <bento-label>Projects</bento-label>
                            <div class="h-[80%] w-full p-[5%] grid-cols-2 grid gap-4">
                                <Gallery items={projects} class="grid-cols-1 gap-4 md:grid-cols-2"/>
                                <img src="/app-icons/right-as-rain.png" alt="Right As Rain"/>
                            </div>
                        </bento-box>
                    </a>
                </div>
            <!-- tools -->
                <div class="w-1/2 h-full float-right padded">
                    <a href="/tools">
                        <bento-box class="hoverable full">
                            <bento-label>Tools</bento-label>
                                <div class="h-[80%] w-full p-[5%] grid-cols-4 grid gap-4">
                                    <div>
                                        <Gallery items={leftTools} class="grid-cols-1 gap-4 md:grid-cols-1"/>
                                    </div>
                                    <div class="col-span-2">
                                        <img src="/app-icons/shared-val-float.png" alt="Shared Values"/>
                                    </div>
                                    <div>
                                        <Gallery items={rightTools} class="grid-cols-1 gap-4 md:grid-cols-1"/>
                                    </div>
                            </div>
                        </bento-box>
                    </a>
                </div>
            </div>
        </div>
        <div class="w-1/4 h-full float-right">
        <!-- skills -->
            <div class="w-full h-3/4 padded">
                <bento-box class="full">
                    <bento-label>Skills</bento-label>
                    <div class="px-[.3vw]">
                        {#each data.skills as {title, skills}}
                            <div class="mt-[1vw]]">
                                <div class="static text-[1.2vw] pb-2">{title}</div>
                                    <div class="mt-1 mb-1 grid grid-cols-3 gap-[.5vw]">
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
            <div class ="w-full h-1/4 padded">
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