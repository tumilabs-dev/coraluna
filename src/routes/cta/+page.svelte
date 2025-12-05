<script>
	import Button from "$lib/components/ui/button.svelte";

	// You can use the `browser` store from Svelte's `@sveltejs/kit`/runes to check for the `window` object or run code only in the browser:
	import { browser } from "$app/environment";
	import { tailwind } from "tw-merge";

	const isMobile = browser ? window.innerWidth < 768 : false;
</script>

<div class="cta-bg page-container">
	<div class="page-content">
		<div class="w-full text-center flex flex-col items-center justify-around h-screen">
			<div>
				<h1 class="text-4xl md:text-[80px] font-bold text-white mb-8 md:mb-10">
					Keep Exploring<br /> The Light
				</h1>

				<Button size={isMobile ? "base" : "xl"}>Follow The Light</Button>
			</div>

			<div class="flex items-center justify-center gap-2">
				<span class="text-lg md:text-2xl text-white font-semibold">Beneath the tides</span>

				<button aria-label="X" class="bubble-button cursor-pointer size-14 md:size-18 ml-2">
					<enhanced:img src="$lib/assets/icons/x.svg" alt="X" class="md:size-8 size-6" />
				</button>

				<button aria-label="Discord" class="bubble-button cursor-pointer size-14 md:size-18">
					<enhanced:img
						src="$lib/assets/icons/discord.svg"
						alt="Discord"
						class="md:size-8 size-6"
					/>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.cta-bg {
		background-image: url("$lib/assets/backgrounds/cta.png?enhanced");
		background-size: cover;
		background-position: center;
	}

	.bubble-button {
		box-shadow:
			inset -4px -4px 20px 0 color-mix(in srgb, var(--color-primary-light) 50%, transparent),
			inset 4px 4px 20px 0 color-mix(in srgb, var(--color-primary-light) 50%, transparent);

		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 100%;
	}
</style>
