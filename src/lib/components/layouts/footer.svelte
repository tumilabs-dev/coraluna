<script>
	import Progress from "../ui/progress.svelte";
	import { ScrollSmoother } from "gsap/ScrollSmoother";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { onMount, tick } from "svelte";
	gsap.registerPlugin(ScrollSmoother);
	gsap.registerPlugin(ScrollTrigger);

	let isCollapsed = $state(false);

	// Watch scroll and collapse/expand footer based on ScrollSmoother activity (scrolling or not)
	$effect(() => {
		const trigger = ScrollTrigger.create({
			trigger: "#smooth-content",
			start: "top top-=110svh", // Kích hoạt khi top của #smooth-content vượt qua top của viewport 1 pixel
			id: "has-scrolled",

			onEnter: () => {
				// Thêm logic của bạn ở đây
				isCollapsed = true;
			},
			onLeaveBack: () => {
				// Nếu người dùng cuộn ngược về đầu trang
				isCollapsed = false;
			}
		});

		return () => {
			trigger?.kill();
		};
	});
</script>

<div
	class="footer-container container mx-auto gap-4 flex md:flex-row flex-col items-center md:items-center justify-between fixed bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 z-50 bg-white/10 border border-white/20 py-3 md:py-4 px-6 rounded-full text-white transition-all duration-300 {!isCollapsed
		? 'w-[calc(100svw-16px)]'
		: 'w-[calc(100svw-24px)] md:w-[calc(100svw-16px)]'}"
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
