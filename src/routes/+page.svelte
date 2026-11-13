<script>
// @ts-nocheck
    import Socials from '#lib/components/socials.svelte';
    import Highlight from '#lib/components/highlight-bento.svelte';
    
    import About from "./about.md"
    
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
                    <!-- <a href="/projects"> -->
                        <bento-box class="full">
                        <!-- <bento-box class="hoverable full"> -->
                            <bento-label>Projects (WIP)</bento-label>
                        </bento-box>
                    <!-- </a> -->
                </div>
            <!-- tools -->
                <div class="w-1/2 h-full float-right padded">
                    <a href="/tools">
                        <bento-box class="hoverable full">
                            <bento-label>Tools</bento-label>
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
                    <div class="px-3">
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
                    <div class="mt-1 mb-1 grid grid-cols-3 gap-[.5vw]">
                        {#each data.languages as {language}}
                            <skill-label>{language}</skill-label>
                        {/each}
                    </div>
                </bento-box>
            </div>
        </div>
    </full-bento>
</div-center>