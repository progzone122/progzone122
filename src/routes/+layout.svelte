<script lang="ts">
	import '../app.css';
	import SocialsComponent from "../components/SocialsComponent.svelte";
	import MenuComponent from "../components/MenuComponent.svelte";
	let { children } = $props();
</script>

<SocialsComponent />
<MenuComponent />
<div class="py-[15em] pl-4">
	{@render children()}
</div>