<script lang="ts">
	import About from "$lib/sections/about/about.svelte";
	import Crew from "$lib/sections/crew/crew.svelte";
	import CTA from "$lib/sections/cta/cta.svelte";
	import Landing from "$lib/sections/landing/landing.svelte";
	import Showcase from "$lib/sections/showcase/showcase.svelte";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { ScrollSmoother } from "gsap/ScrollSmoother";
	import { onMount } from "svelte";

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(ScrollSmoother);

	ScrollTrigger.defaults({
		markers: {
			startColor: "purple",
			endColor: "purple",
			fontSize: "22px",
			indent: 10
		}
	});

	onMount(() => {
		const sections = gsap.utils.toArray("section") as HTMLElement[];
		const scrollSmootherInstance = new ScrollSmoother({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			smooth: 1,
			smoothTouch: 0.1,
			ignoreMobileResize: true
		});
		function goToSection(i: number) {
			scrollSmootherInstance.scrollTo(sections[i], true, "top top");
		}

		sections.forEach((panel, i) => {
			// const mainAnim = gsap.timeline({ paused: true });

			ScrollTrigger.create({
				id: `section${i}`,
				trigger: panel,
				start: "top+=100px top",
				end: "bottom-=100px top",
				onEnter: () => {
					goToSection(i + 1);
				},
				onEnterBack: () => {
					goToSection(i);
				}
			});
		});
	});
</script>

<div id="smooth-wrapper">
	<div id="smooth-content">
		<section class="landing-section">
			<Landing />
		</section>

		<section class="about-section">
			<About />
		</section>

		<section class="crew-section">
			<Crew />
		</section>

		<section class="showcase-section">
			<Showcase />
		</section>
		<section class="cta-section">
			<CTA />
		</section>
	</div>
</div>
