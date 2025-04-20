<script>
	export let icomponent;

	let currentIndex = 0;

	export let items;

	const next = () => {
		currentIndex = (currentIndex + 1) % items.length;
	};

	const prev = () => {
		currentIndex = (currentIndex - 1 + items.length) % items.length;
	};

	setInterval(() => {
		next();
	}, 4000);
</script>

<div class="relative w-full h-full max-w-3xl mx-auto">
	<div class="w-full h-full overflow-hidden rounded-lg">
		<div class="w-full h-full flex transition-transform duration-300" style="transform: translateX(-{currentIndex * 100}%)">
			{#each items as item}
				<div class="w-full h-full flex-shrink-0">
					<svelte:component this="{icomponent}" {...item} />
				</div>
			{/each}
		</div>
	</div>
	<!-- Dots navigation -->
	<div class="flex justify-center gap-2 mt-4">
		{#each items as _, index}
			<button
				class="w-3 h-3 rounded-full transition-all duration-300"
				class:bg-primary={index === currentIndex}
				class:bg-primary2={index !== currentIndex}
				on:click={() => currentIndex = index}
			/>
		{/each}
	</div>
</div>