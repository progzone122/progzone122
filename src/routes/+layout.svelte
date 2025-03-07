<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import SocialsComponent from "../components/SocialsComponent.svelte";
	import MenuComponent from "../components/MenuComponent.svelte";
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<SocialsComponent />
	<MenuComponent />
	<div class="py-[15em] pl-4">
		{@render children()}
	</div>
</ParaglideJS>