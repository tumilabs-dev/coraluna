<script lang="ts">
	import Footer from "$lib/components/layouts/footer.svelte";
	import Header from "$lib/components/layouts/header.svelte";
	import "./layout.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={"/favicon.ico"} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		name="description"
		content="Coraluna is a project that allows you to explore the Pharosverse."
	/>
	<meta
		name="keywords"
		content="Coraluna, Pharosverse, Coraluna NFT, Coraluna Game, Coraluna Metaverse"
	/>
	<meta name="author" content="Coraluna" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="bingbot" content="index, follow" />
	<meta name="yandexbot" content="index, follow" />
	<title>Coraluna</title>
	<meta name="title" content="Coraluna" />
	<meta
		name="description"
		content="Coraluna is a project that allows you to explore the Pharosverse."
	/>
	<meta
		name="keywords"
		content="Coraluna, Pharosverse, Coraluna NFT, Coraluna Game, Coraluna Metaverse"
	/>
	<meta name="author" content="Coraluna" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="bingbot" content="index, follow" />
	<meta name="yandexbot" content="index, follow" />
</svelte:head>

<div class="page">
	<Header />

	<main class="relative">
		{@render children()}
	</main>

	<!-- <Footer /> -->
</div>

<style>
	:global(html) {
		background-color: var(--color-primary);
	}

	:global(body) {
		background-image: url("$lib/assets/backgrounds/base.png");
		background-size: cover;
		background-position: top left;
	}

	:global(main) {
		position: relative;
		overflow: hidden;
		z-index: 1;
	}
</style>
