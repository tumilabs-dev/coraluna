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

<div class="showcase page-container relative">
	<enhanced:img src={bgImage} alt="Showcase" class="absolute inset-0 w-full h-full object-cover" />
	<div class="relative w-screen h-screen overflow-y-auto md:overflow-x-auto md:overflow-y-visible">
		<div
			class="showcase-wrapper h-full grid grid-cols-2 gap-4 px-3 md:px-20 pt-24 pb-26 md:flex md:flex-nowrap md:items-center md:pt-32 md:pb-30 bg-transparent md:min-w-max"
		>
			{#each imageUrls as image}
				<div
					class="showcase-container relative rounded-2xl w-full aspect-square md:w-[40svw] md:aspect-square! md:shrink-0"
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
