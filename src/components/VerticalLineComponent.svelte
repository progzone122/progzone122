<script lang="ts">
    import {onMount} from "svelte";

    export let width: string = "8px";
    export let height: number = 0;
    export let color: string = "white";

    let adjustedHeight: string = "0";

    onMount(() => {
        const isSmallScreen = window.innerHeight <= 600;
        adjustedHeight = isSmallScreen ? `${height / 2}vh` : `${height}vh`;
    });
</script>
<div class="main rounded-full transform translate-x-1/2"
     style="width: {width}; height: {adjustedHeight}; background-color: {color};"
/>