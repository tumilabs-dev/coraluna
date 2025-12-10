<script lang="ts">
	import crewAvz from "$lib/assets/crew/avz.png?enhanced";
	import crewOkiwa from "$lib/assets/crew/okiwa.png?enhanced";

	import bgImage from "$lib/assets/backgrounds/crew.png?enhanced";
	import bgImageMobile from "$lib/assets/backgrounds/crew-mobile.png?enhanced";

	const crewMembers = [
		{
			name: "AVZ",
			role: "Tidecaller",
			image: crewAvz,
			xUrl: "https://x.com/avzcrypto"
		},
		{
			name: "Okiwa",
			role: "Coral Architect",
			image: crewOkiwa,
			xUrl: "https://x.com/0x_okiwa"
		}
	];

	let currentIndex = $state(0);

	function nextSlide() {
		currentIndex = (currentIndex + 1) % crewMembers.length;
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + crewMembers.length) % crewMembers.length;
	}
</script>

<div class="relative page-container">
	<enhanced:img
		src={bgImage}
		alt="Crew"
		class="absolute inset-0 w-full h-full object-cover -z-10 hidden md:block"
	/>
	<enhanced:img
		src={bgImageMobile}
		alt="Crew"
		class="absolute inset-0 w-full h-full object-cover -z-10 md:hidden"
	/>
	<div class="page-content justify-start! relative">
		<div class="w-full md:w-1/2 md:px-[6%] z-10">
			<h1 class="text-[32px] md:text-[48px] font-bold text-white mb-4 md:mb-8 md:text-center pl-3">
				The Crew
			</h1>

			<div class="flex flex-col-reverse md:flex-col gap-4">
				<div class="relative">
					<!-- Carousel Container -->
					<div
						class="relative overflow-hidden rounded-[25px] md:rounded-[33px] w-full aspect-square"
					>
						{#each crewMembers as member, index}
							<div
								class="absolute inset-0 rounded-[25px] md:rounded-[33px] overflow-hidden transition-opacity duration-300 ease-in-out {currentIndex ===
								index
									? 'opacity-100 z-10'
									: 'opacity-0 z-0 pointer-events-none'}"
							>
								<div class="flex items-center justify-center">
									<enhanced:img
										src={member.image}
										alt={member.name}
										class="w-full h-full object-cover rounded-2xl"
									/>
								</div>
								<!-- Overlay -->
								<div
									class="border-4 md:border-8 rounded-3xl md:rounded-4xl border-[#84c7f9] absolute inset-0 crew-overlay"
								></div>

								<!-- Information -->
								<div
									class="absolute bottom-3 inset-x-3 md:bottom-4 md:inset-x-4 py-2 md:py-4 pl-4 md:pl-6 pr-2 md:pr-4 bg-primary-light/70 backdrop-blur-2xl rounded-xl md:rounded-3xl border border-white/20 flex items-center justify-between"
								>
									<div class="">
										<h2 class="text-base md:text-2xl font-semibold text-white">{member.name}</h2>
										<p class="text-xs md:text-base text-white/70">{member.role}</p>
									</div>
									<button
										aria-label="Open X"
										class="cursor-pointer rounded-lg md:rounded-xl p-2 size-[40px] md:size-[52px] flex items-center justify-center bg-white/10"
										onclick={() => window.open(member.xUrl, "_blank")}
									>
										<enhanced:img
											src="$lib/assets/icons/x.svg"
											alt="X"
											class="size-4 md:size-6.5"
										/>
									</button>
								</div>
							</div>
						{/each}
					</div>

					<!-- Navigation Buttons -->
					<div class="flex items-center justify-center gap-4 mt-4">
						<button
							aria-label="Previous"
							class="cursor-pointer rounded-lg md:rounded-xl p-2 size-[40px] md:size-[52px] flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
							onclick={prevSlide}
						>
							<svg
								class="size-5 md:size-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>

						<!-- Dots Indicator -->
						<div class="flex gap-2">
							{#each crewMembers as _, index}
								<button
									aria-label="Go to slide {index + 1}"
									class="size-2 md:size-3 rounded-full transition-all {currentIndex === index
										? 'bg-white'
										: 'bg-white/40'}"
									onclick={() => (currentIndex = index)}
								></button>
							{/each}
						</div>

						<button
							aria-label="Next"
							class="cursor-pointer rounded-lg md:rounded-xl p-2 size-[40px] md:size-[52px] flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
							onclick={nextSlide}
						>
							<svg
								class="size-5 md:size-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>
					</div>
				</div>

				<ul class=" text-white list-disc text-sm md:text-lg px-8">
					<li>A founder with a vision.</li>
					<li>A wanderer who turned tides into stories.</li>
					<li>Coraluna began with his light and continues with those who choose to follow it.</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="absolute inset-0 page-overlay"></div>
</div>

<style>
	/* PC */
	@media (min-width: 768px) {
		.page-overlay {
			background-image: linear-gradient(to right, #08b8dd00 0%, #08274f 0%, transparent 60%);
		}
	}
	/* Mobile */
	@media (max-width: 768px) {
		.page-overlay {
			background-image: linear-gradient(to bottom, #08b8dd00 0%, #08274f 0%, transparent 30%);
		}
	}

	.crew-overlay {
		box-shadow:
			inset -4px -4px 30px 0 color-mix(in srgb, var(--color-primary-lightest) 30%, transparent),
			inset 4px 4px 30px 0 color-mix(in srgb, var(--color-primary-lightest) 30%, transparent);
	}
</style>
