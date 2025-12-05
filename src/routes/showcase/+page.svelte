<script lang="ts">
	const images = Object.values(
		import.meta.glob("$lib/assets/showcases/*.png", { eager: true, import: "default" })
	);
</script>

<div class="showcase-bg page-container">
	<div class="page-content relative">
		<div
			class="grid md:grid-cols-3 container gap-4 fixed top-0 left-1/2 -translate-x-1/2 h-screen overflow-y-scroll px-3 md:px-20 pt-24 pb-26 md:items-center md:pt-32 md:pb-30 bg-transparent"
		>
			{#each images as image}
				<div class="showcase-container relative rounded-2xl">
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
	.showcase-bg {
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
