<script lang="ts">
	import About from "$lib/sections/about/about.svelte";
	import Crew from "$lib/sections/crew/crew.svelte";
	import CTA from "$lib/sections/cta/cta.svelte";
	import Landing from "$lib/sections/landing/landing.svelte";
	import Showcase from "$lib/sections/showcase/showcase.svelte";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { ScrollSmoother } from "gsap/ScrollSmoother";
	import { onMount, tick } from "svelte";

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(ScrollSmoother);

	onMount(async () => {
		await tick();
		const sections = gsap.utils.toArray("section") as HTMLElement[];
		const scrollSmootherInstance = new ScrollSmoother({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			smooth: 0.8,
			smoothTouch: 0.1,
			ignoreMobileResize: true
		});

		// Wait for ScrollSmoother to initialize and elements to be measured
		await tick();
		// Additional wait to ensure DOM is fully ready
		await new Promise((resolve) => setTimeout(resolve, 100));

		const showcaseSection = document.querySelector(".showcase-section") as HTMLElement; // Get the section element
		const showcase = document.querySelector(".showcase") as HTMLElement; // Get the main container
		const showcaseWrapper = document.querySelector(".showcase-wrapper") as HTMLElement; // Get the flex container

		if (showcase && showcaseWrapper && showcaseSection) {
			// Calculate the scroll distance: total width of wrapper minus viewport width
			// Use window width for more accurate calculation with ScrollSmoother
			const viewportWidth = window.innerWidth;
			const scrollDistance = showcaseWrapper.scrollWidth - viewportWidth;

			// Ensure minimum scroll distance
			const finalScrollDistance = Math.max(scrollDistance, 100);

			gsap.to(showcaseWrapper, {
				x: -finalScrollDistance,
				ease: "none", // <-- IMPORTANT!
				scrollTrigger: {
					id: "showcase-tween",
					trigger: showcaseSection,
					pin: true,
					pinSpacing: true,
					start: "top top",
					end: `+=${finalScrollDistance}`,
					scrub: 1,

					invalidateOnRefresh: true,
					anticipatePin: 1
				}
			});
		}
		sections.forEach((panel, i) => {
			ScrollTrigger.create({
				trigger: panel,
				start: "top center",
				end: "bottom center",
				snap: {
					snapTo: 1 / (sections.length - 1),
					duration: { min: 0.3, max: 0.6 },
					delay: 0,
					ease: "power2.inOut"
				}
			});
		});

		// console.log(sections);
		ScrollTrigger.refresh();
	});
</script>

<div id="smooth-wrapper">
	<div id="smooth-content">
		<section class="landing-section" id="sc-1">
			<Landing />
		</section>

		<section class="about-section" id="sc-2">
			<About />
		</section>

		<section class="crew-section" id="sc-3">
			<Crew />
		</section>

		<section class="showcase-section horizontal-section" id="sc-4">
			<Showcase />
		</section>
		<section class="cta-section end-section" id="sc-5">
			<CTA />
		</section>
	</div>
</div>
