<script lang="ts">
	import { goto, onNavigate } from "$app/navigation";
	import menuIcon from "$lib/assets/icons/menu.svg?enhanced";
	import coralunaLogo from "$lib/assets/logos/coraluna.png?enhanced";
	import logoWhite from "$lib/assets/logos/logo-white.png";
	import Button from "$lib/components/ui/button.svelte";
	import { onMount } from "svelte";

	import { showMobileMenu } from "$lib/animations/layouts/mobileMenu.animation";
	import { ScrollSmoother } from "gsap/ScrollSmoother";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { gsap } from "gsap";
	gsap.registerPlugin(ScrollSmoother);
	gsap.registerPlugin(ScrollTrigger);

	let isOpenMenu = $state<boolean>(false);

	const toggleMenu = () => (isOpenMenu = !isOpenMenu);

	let menuPosition = $state<number>(0);

	onMount(() => {
		const menuContainer = document.querySelector(".header-container");
		if (menuContainer) {
			menuPosition = menuContainer.getBoundingClientRect().height + 8 + 12;
		}
	});

	onNavigate((navigation) => {
		return new Promise(async (resolve) => {
			isOpenMenu = false;
			document.startViewTransition(async () => {
				resolve(void 0);
				// await sleep(1000);

				await navigation.complete;
			});
		});
	});

	let isScrollTriggersDisabled = $state<boolean>(false);

	$effect(() => {
		if (isScrollTriggersDisabled) {
			const timer = setTimeout(() => {
				ScrollTrigger.getAll().forEach((st) => st.enable());
				ScrollSmoother.refresh();
				isScrollTriggersDisabled = false;
			}, 1000);
			return () => clearTimeout(timer);
		}
	});

	function goToSection(section: string) {
		const instance = ScrollSmoother.get();
		ScrollSmoother.refresh();
		ScrollTrigger.refresh();
		ScrollTrigger.getAll().forEach((st) => st.disable());
		isScrollTriggersDisabled = true;
		instance?.scrollTo(section, true);
	}
</script>

<div
	class="header-container container mx-auto w-[calc(100svw-16px)] flex items-center justify-between fixed top-2 md:top-10 left-1/2 -translate-x-1/2 z-50 bg-white/10 border border-white/20 py-3 pl-6 pr-3 rounded-full"
>
	<!-- Mobile menu icon -->
	<button class="md:hidden cursor-pointer" onclick={toggleMenu} aria-label="Toggle menu">
		<enhanced:img src={menuIcon} alt="Menu" class="w-6 h-6" />
	</button>

	<!-- Brands -->
	<button
		class="flex items-center gap-2 grow md:grow-0"
		onclick={() => goToSection("#sc-1")}
		aria-label="Coraluna"
	>
		<enhanced:img src={coralunaLogo} alt="Coraluna" class="w-6 h-6 md:block hidden" />
		<enhanced:img src={logoWhite} alt="Coraluna Logo" class="h-4 w-auto" />
	</button>

	<!-- Navigation -->
	<nav class="text-white text-sm font-medium hidden md:block" style="top: {menuPosition}px">
		<ul class="flex items-center gap-6">
			<li><button onclick={() => goToSection("#sc-2")}>The Lore</button></li>
			<li><button onclick={() => goToSection("#sc-3")}>The Crew</button></li>
			<li><button onclick={() => goToSection("#sc-4")}>Coral Showcase</button></li>
			<li><button onclick={() => goToSection("#sc-1")}>Pharosverse</button></li>
		</ul>
	</nav>

	<!-- Interact -->
	<Button size="base" onclick={() => goToSection("#sc-5")}>Find The Light</Button>
</div>

{#if isOpenMenu}
	<div
		class="mobile-menu-container container mx-auto w-fit flex items-center justify-between fixed left-1/2 -translate-x-1/2 z-50 bg-white/3 border border-white/20 pt-4 rounded-4xl overflow-hidden"
		style="top: {menuPosition}px"
		in:showMobileMenu
		out:showMobileMenu
	>
		<nav class="text-white text-sm font-medium w-full">
			<ul class="mobile-menu-list flex items-center justify-center px-6 gap-6 pb-4">
				<li><button onclick={() => goToSection("#sc-2")}>The Lore</button></li>
				<li><button onclick={() => goToSection("#sc-3")}>The Crew</button></li>
				<li><button onclick={() => goToSection("#sc-4")}>Coral Showcase</button></li>
			</ul>
			<Button size="base" className="w-full rounded-none" onclick={() => goToSection("#sc-1")}
				>Pharosverse</Button
			>
		</nav>
	</div>
	<div
		role="button"
		aria-label="Close menu"
		class="mobile-menu-overlay absolute top-0 left-0 w-full h-full z-40"
		onclick={() => toggleMenu()}
		onkeydown={(e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				toggleMenu();
			}
		}}
		tabindex="0"
	></div>
{/if}

<style>
	.header-container,
	.mobile-menu-container {
		backdrop-filter: blur(20px);
		box-shadow: inset 4px 4px 20px 0
			color-mix(in srgb, var(--color-primary-lightest) 30%, transparent);
	}
</style>
