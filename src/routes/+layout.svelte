<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/layouts/header.svelte";
	import { pageTransitionAnimation } from "$lib/utils/transitions.svelte.js";
	import { onNavigate } from "$app/navigation";
	import gsap from "gsap";
	import { onMount, tick } from "svelte";
	import "./layout.css";
	import { sleep } from "../utils/sleep.js";

	let { data, children } = $props();
	let mounted = $state(false);
	let transitionKey = $state(0);
	let previousPathname = $state<string | undefined>(undefined);

	let pathname = $derived(data.pathname);

	onMount(async () => {
		// Wait for next tick to ensure DOM is ready
		await tick();
		mounted = true;
		// Trigger initial animation by changing the key
		transitionKey = 1;
		previousPathname = pathname;
	});

	// Update key when pathname changes (after initial mount)
	$effect(() => {
		if (mounted && pathname && pathname !== previousPathname) {
			transitionKey++;
			previousPathname = pathname;
		}
	});

	const handleOverlay = (direction: "in" | "out") => {
		if (direction === "out") {
			gsap.to(".overlay", {
				duration: 1,
				opacity: 1,
				display: "block",
				ease: "power2.inOut"
			});
			gsap.to(document.querySelector(".overlay-animate"), {
				x: "100%",
				// backgroundColor: "white",
				duration: 1,
				ease: "power2.inOut"
			});
		} else {
			gsap.to(".overlay", {
				duration: 1,
				opacity: 0,
				display: "none",
				ease: "power2.inOut"
			});
			gsap.set(document.querySelector(".overlay-animate"), {
				x: "-100%",
				// backgroundColor: "white",
				duration: 1,
				ease: "power2.inOut"
			});
		}
	};

	onNavigate((navigation) => {
		return new Promise(async (resolve) => {
			console.log("startViewTransition");

			document.startViewTransition(async () => {
				await sleep(300);

				resolve(void 0);
				// await sleep(1000);

				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#key transitionKey}
	<div
		class="page"
		in:pageTransitionAnimation={{
			duration: 1000,
			delay: 1500,
			onStart: () => handleOverlay("in")
		}}
		out:pageTransitionAnimation={{
			duration: 1000,
			direction: "out",
			delay: 0,
			onStart: () => handleOverlay("out")
		}}
	>
		<Header />

		<div class="overlay w-full h-full absolute top-0 left-0 z-100"></div>

		{@render children()}
	</div>
{/key}

<style>
	:global(html) {
		scroll-behavior: smooth;
		background-color: var(--color-primary);
	}

	:global(body) {
		background-image: url("$lib/assets/backgrounds/base.png");
		background-size: cover;
		background-position: top left;
		height: 100vh;
		width: 100vw;
		overflow-x: hidden;
	}

	.overlay {
		box-shadow:
			inset -4px -4px 120px 0 color-mix(in srgb, var(--color-primary-lightest) 40%, transparent),
			inset 4px 4px 120px 0 color-mix(in srgb, var(--color-primary-lightest) 40%, transparent);
	}
</style>
