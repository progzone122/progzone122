<script lang="ts">
    export let skills: string[] = [];
</script>
<div class="w-full flex flex-wrap gap-2">
    {#each skills as skill}
        <div class="bg-primary2 hover:bg-accent
                transition-colors duration-300
                border-2 border-white rounded-full px-6 py-2 text-center cursor-pointer">
            <p class="text-white font-bold text-[16px]">{skill}</p>
        </div>
    {/each}
</div>