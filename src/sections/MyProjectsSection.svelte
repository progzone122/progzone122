<script>
    import ProjectComponent from "../components/ProjectComponent.svelte";
    import { projectsState } from "$lib/store/projects.svelte.ts";
</script>
<div class="w-full text-white"
     id="projects">
    <h2 class="text-4xl font-extrabold text-center">My projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {#each projectsState as project}
            <ProjectComponent name="{project.name}"
                              description="{project.description}"
                              preview="{project.preview}"
                              link="{project.link}"
            />
        {/each}
    </div>
</div>
