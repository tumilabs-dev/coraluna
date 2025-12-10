<script lang="ts">
	import bgImage from "$lib/assets/backgrounds/showcase.png?enhanced";

	const images = import.meta.glob(
		"$lib/assets/showcases/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}",
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);

	const imageUrls = Object.values(images).map((module: any) => module.default);
</script>

<div class="showcase page-container relative overflow-hidden">
	<enhanced:img src={bgImage} alt="Showcase" class="absolute inset-0 w-full h-full object-cover" />
	<div class="relative w-screen h-full">
		<div
			class="showcase-wrapper flex flex-nowrap gap-4 px-3 md:px-20 pt-24 pb-26 md:items-center md:pt-32 md:pb-30 bg-transparent"
		>
			{#each imageUrls as image}
				<div
					class="showcase-container relative rounded-2xl w-[30svw] h-[30svh] md:w-[75svw] md:h-[75svh] aspect-square!"
				>
					<div
						class="showcase-container-overlay absolute inset-0 rounded-2xl border-4 md:border-8 border-primary-lightest/80"
					></div>
					<enhanced:img
						src={image}
						alt="Showcase"
						class="w-full h-full aspect-square object-cover rounded-2xl"
						loading="lazy"
					/>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.showcase-container-overlay {
		box-shadow:
			inset -4px -4px 30px 0 color-mix(in srgb, var(--color-primary-lightest) 30%, transparent),
			inset 4px 4px 30px 0 color-mix(in srgb, var(--color-primary-lightest) 30%, transparent);
	}
</style>
