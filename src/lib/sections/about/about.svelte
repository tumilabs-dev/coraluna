<script>
	import bgImageMobile from "$lib/assets/backgrounds/about-mobile.png?enhanced";
	import bgImage from "$lib/assets/backgrounds/about.png?enhanced";
	import Button from "$lib/components/ui/button.svelte";
</script>

<div class="about-bg page-container">
	<enhanced:img
		src={bgImage}
		alt="About"
		sizes="min(1440px, 100vw)"
		class="absolute inset-0 w-full h-full object-cover -z-10 hidden md:block"
	/>

	<enhanced:img
		src={bgImageMobile}
		alt="About"
		sizes="min(1440px, 100vw)"
		class="absolute inset-0 w-full h-full object-cover -z-10 md:hidden"
	/>

	<div class="page-content z-20">
		<div class="w-full md:w-1/2" data-speed="0.8">
			<enhanced:img
				src="$lib/assets/logos/logo-white.png?enhanced"
				alt="About"
				class="w-auto h-4 md:h-6 object-contain opacity-70 mb-2"
			/>
			<h1 class="text-4xl md:text-[72px] font-bold text-white mb-2 md:mb-4">The Beginning</h1>
			<p class="text-white/70 md:text-2xl font-medium mb-4 md:mb-6">
				Where every journey finds its first light
			</p>
			<p class="text-sm md:text-base text-white font-normal mb-6">
				Coraluna is the hidden harbor beneath the tides, where every Sailor first arrives to find
				their compass, tools and the community that will accompany them into the world of PHAROS. A
				living culture of discovery is forming here, shaped by those who seek something brighter.
				<br />Your journey begins in Coraluna.
			</p>
			<Button size="lg">Find the light 🪸🌕</Button>
		</div>
	</div>
</div>

<style>
</style>
