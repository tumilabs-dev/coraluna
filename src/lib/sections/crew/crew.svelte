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
</script>

<div class="relative page-container">
	<enhanced:img
		src={bgImage}
		alt="Crew"
		sizes="min(1440px, 100vw)"
		class="absolute inset-0 w-full h-full object-cover -z-10 hidden md:block"
	/>
	<enhanced:img
		src={bgImageMobile}
		alt="Crew"
		sizes="min(1440px, 100vw)"
		class="absolute inset-0 w-full h-full object-cover -z-10 md:hidden"
	/>
	<div class="page-content justify-start! relative h-full overflow-y-auto">
		<div class="w-full md:w-2/3 md:px-[6%] z-10">
			<h1
				class="text-[32px] md:text-[48px] font-bold text-white mt-4 mb-8 md:mb-8 text-center pl-3"
			>
				The Crew
			</h1>

			<div class="flex flex-col-reverse md:mt-24 md:flex-col gap-4">
				<div class="flex flex-col md:flex-row md:justify-center md:items-center gap-4 md:gap-6">
					{#each crewMembers as member}
						<div
							class="relative mx-auto overflow-hidden rounded-[25px] md:rounded-[33px] w-full max-w-[450px] max-h-[450px] aspect-square"
						>
							<div class="w-full h-full flex items-center justify-center">
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
									<enhanced:img src="$lib/assets/icons/x.svg" alt="X" class="size-4 md:size-6.5" />
								</button>
							</div>
						</div>
					{/each}
				</div>
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
