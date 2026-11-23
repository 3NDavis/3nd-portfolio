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
    }
    .mobileGrid{
        display: block;
    }
    .highlightGrid{
        /* mx-[.5vw] my-[1vw] mobileGrid grid-rows-2 gap-y-5 */
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .highlightH{
        height: 20vw;
    }
}
@media only screen and (min-width: 600px){
    .mobileWidth{
        width: 100%;
    }
    .mobileGrid{
        display: grid;
    }
    .highlightGrid{
        grid-template-rows: repeat(2, minmax(0, 1fr));
    }
    .highlightH{
        height: 11vw;
    }
}
</style>

<div-center class="pt-[3vw]">
    <full-bento>
        <div class="mobileGrid grid-cols-4">
            <!-- Left Pillar -->
            <div class="col-start-1 col-span-3">
                <div class="row-span-5 mobileGrid grid-cols-5">
                <!-- about -->
                    <div class="col-span-3 padded mobileWidth">
                        <bento-box class="full">
                            <div class="mr-[4vw] mb-15">
                                <h2 class="mt-1 pb-2">Hi, I'm Ethan Davis.</h2>
                                <About/>
                            </div>
                            <div class="absolute w-[96%] bottom-[0.5vw]">
                                <Socials/>
                            </div>
                        </bento-box>
                    </div>
                <!-- highlight -->
                    <div class="col-span-2 padded mobileWidth">
                        <bento-box class="h-full">
                            <bento-label>Highlights</bento-label>
                            <div class="mx-[.5vw] my-[1vw] grid highlightGrid gap-y-5">
                                {#each data.highlights as highlight, i}
                                    <div class="highlightH">
                                        <Highlight {highlight}/>
                                    </div>
                                {/each}
                            </div>
                        </bento-box>
                    </div>
                </div>
                <div class="row-span-2 mobileGrid grid-cols-2">
                <!-- projects -->
                    <div class="padded mobileWidth">
                        <a href="/projects">
                            <!-- <bento-box class="full"> -->
                            <bento-box class="hoverable full">
                                <bento-label>Projects</bento-label>
                                <div class="content-center">
                                    <div class="grid grid-cols-3 gap-[1.5vw] mx-[1vw] place-content-center">
                                        {#each projects as project}
                                            <img class="growhover" src={project.src} alt={project.alt} />
                                        {/each}
                                    </div>
                                </div>
                            </bento-box>
                        </a>
                    </div>
                <!-- tools -->
                    <div class="padded mobileWidth">
                        <a href="/tools">
                            <bento-box class="hoverable full">
                                <bento-label>Tools</bento-label>
                                    <div class="p-[5%] content-center">
                                        <div class="grid grid-cols-3 gap-[1.5vw] mx-[1vw] place-content-center">
                                            {#each tools as item}
                                                <img class="growhover" src={item.src} alt={item.alt} />
                                                <Popover class="popover text-[.6vw]" title={item.popoverTitle}>{item.popoverContent}</Popover>
                                            {/each}
                                        </div>
                                </div>
                            </bento-box>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Right Pillar -->
            <div class="col-start-4 mobileGrid grid-rows-6 mobileWidth">
            <!-- skills -->
                <div class="row-span-5 padded mobileWidth">
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
                <div class ="padded mobileWidth">
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
        </div>
        <div class="h-[4vw]"></div>
    </full-bento>
</div-center>