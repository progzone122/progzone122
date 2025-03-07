<script type="ts">
    import HorizontalLineComponent from "./HorizontalLineComponent.svelte";
    export let data = [
        {
            name: "About",
            to: "#about"
        },
        {
            name: "My Skills",
            to: "#skills"
        },
        {
            name: "My Projects",
            to: "#projects"
        },
        {
            name: "My Contributions",
            to: "#projects"
        }
    ];
</script>

<div class="w-[20em] md:w-[26em] absolute top-4 right-0 px-8 flex flex-col gap-3 items-end">
    <h1 class="text-2xl font-extrabold text-white">
        <pre><code>&lt;DiabloSat /&gt;</code></pre>
    </h1>
    <HorizontalLineComponent width="100%" />
    <div class="text-white">
        <pre><code>let menu: Vec&lt;&str&gt; = vec![</code></pre>
        {#each data as item}
            <pre><code>     "<a href={item.to} class="text-primary border-b-2 hover:border-b-4 hover:border-accent hover:text-accent">{item.name}</a>",</code></pre>
        {/each}
        <pre><code>];</code></pre>
    </div>
</div>