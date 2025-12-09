<script lang="ts">
	const images = Object.values(
		import.meta.glob("$lib/assets/showcases/*.png", { eager: true, import: "default" })
	);
</script>

<div class="showcase page-container relative overflow-hidden">
	<div class="relative w-screen h-full">
		<div
			class="showcase-wrapper flex flex-nowrap gap-4 px-3 md:px-20 pt-24 pb-26 md:items-center md:pt-32 md:pb-30 bg-transparent"
		>
			{#each images as image}
				<div class="showcase-container relative rounded-2xl w-[75svw] h-[75svh] aspect-square">
					<div
						class="showcase-container-overlay absolute inset-0 rounded-2xl border-4 md:border-8 border-primary-lightest/80"
					></div>
					<enhanced:img
						src={image as string}
						alt="Showcase"
						class="w-full h-full aspect-square object-cover rounded-2xl"
					/>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.showcase {
		background-image: url("$lib/assets/backgrounds/showcase.png?enhanced");
		background-size: cover;
		background-position: center;
	}

	.showcase-container-overlay {
		box-shadow:
			inset -4px -4px 30px 0 color-mix(in srgb, var(--color-primary-lightest) 30%, transparent),
			inset 4px 4px 30px 0 color-mix(in srgb, var(--color-primary-lightest) 30%, transparent);
	}
</style>
