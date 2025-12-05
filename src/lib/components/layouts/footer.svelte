<script>
	import Progress from "../ui/progress.svelte";
</script>

<div
	class="footer-container container w-[calc(100svw-16px)] mx-auto gap-4 flex md:flex-row flex-col items-center md:items-center justify-between fixed bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 z-50 bg-white/10 border border-white/20 py-3 md:py-4 px-6 rounded-full text-white"
>
	<span class="text-sm font-medium">Find the light 🪸🌕 </span>
	<div class="flex items-center gap-2 grow md:w-auto w-full">
		<Progress value={1600 / 2500} />

		<span class="text-sm font-medium">{1_500} / {2_500}</span>
	</div>
</div>

<style>
	.footer-container {
		backdrop-filter: blur(40px);
		box-shadow: inset 4px 4px 20px 0
			color-mix(in srgb, var(--color-primary-lightest) 30%, transparent);
	}
</style>
