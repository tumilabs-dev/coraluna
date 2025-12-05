<script lang="ts">
	const { value } = $props();
</script>

<div class="progress-container relative h-4 rounded-full bg-white/10 grow">
	<div
		class="progress-bar transition-all duration-300 ease-in-out h-full rounded-full bg-primary-lightest"
		style="width: {value * 100}%"
	></div>
</div>

<style>
	.progress-bar {
		box-shadow:
			inset -2px -2px 6px 0 #ffffff60,
			inset 2px 2px 6px 0 #ffffff60;
	}
</style>
