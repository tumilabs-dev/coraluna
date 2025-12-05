<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "$lib/components/ui/button.svelte";
	import coralunaLogo from "$lib/assets/logos/coraluna.png?enhanced";
	import logoWhite from "$lib/assets/logos/logo-white.png";

	const clickToFooter = async () => {
		await goto("/footer");
	};
</script>

<div
	class="header-container container mx-auto flex items-center justify-between fixed top-10 left-1/2 -translate-x-1/2 z-50 bg-white/10 border border-white/20 py-4 pl-6 pr-3 rounded-full"
>
	<!-- Brands -->
	<a href="/" class="flex items-center gap-2" aria-label="Coraluna">
		<enhanced:img src={coralunaLogo} alt="Coraluna" class="w-6 h-6" />
		<enhanced:img src={logoWhite} alt="Coraluna Logo" class="h-4 w-auto" />
	</a>

	<!-- Navigation -->
	<nav class="text-white text-sm font-medium">
		<ul class="flex items-center gap-6">
			<li><a href="/about">The Lore</a></li>
			<li><a href="/showcase">Coral Showcase</a></li>
			<li><a href="/crew">Pharosverse</a></li>
		</ul>
	</nav>

	<!-- Interact -->
	<Button size="base" onclick={clickToFooter}>Find The Light</Button>
</div>

<style>
	.header-container {
		backdrop-filter: blur(40px);
		box-shadow: inset 4px 4px 20px 0
			color-mix(in srgb, var(--color-primary-lightest) 30%, transparent);
	}
</style>
