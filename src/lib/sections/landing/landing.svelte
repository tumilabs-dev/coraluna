<script>
	import bgImage from "$lib/assets/backgrounds/home.png?enhanced";
	import bannerLogoWhite from "$lib/assets/logos/banner-logo-white.png?enhanced";
	import Button from "$lib/components/ui/button.svelte";
	import { animate } from "$lib/utils/animateBase.svelte";
</script>

<div class="hero-bg relative h-screen w-screen page-container">
	<enhanced:img
		src={bgImage}
		alt="Home"
		class="absolute inset-0 w-full h-full object-cover -z-10"
	/>
	<div
		class="banner-container container mx-auto h-full w-full flex flex-col items-center justify-center"
	>
		<enhanced:img
			data-speed="0.8"
			src={bannerLogoWhite}
			alt="Coraluna"
			class="hero-banner w-full object-contain"
			use:animate={{
				type: "set",
				filter: `brightness(1) blur(0px)`
			}}
			use:animate={{
				type: "to",
				filter: `brightness(1.4)`,
				duration: 1,
				ease: "power2.in",
				yoyo: true,
				repeat: -1,
				repeatDelay: 1,
				delay: 2
			}}
		/>

		<Button size="xl" data-speed="0.8" data-lag="0.2">Enter Pharosverse</Button>
	</div>
</div>

<style>
</style>
