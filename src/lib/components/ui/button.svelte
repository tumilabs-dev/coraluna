<script lang="ts">
	import { cn } from "../../../utils/cn";

	type Size = "sm" | "base" | "lg" | "xl";

	let { children, className = "", size = "base" as Size, ...props } = $props();

	const sizes = {
		sm: "h-8 text-xs px-4 ",
		base: "h-10 text-sm px-6",
		lg: "h-12 text-lg px-8",
		xl: "h-16 text-xl px-10"
	};
</script>

<button
	class={cn(
		`button ${className} bg-primary-light text-white rounded-full border border-white/20 font-semibold cursor-pointer`,
		sizes[size]
	)}
	{...props}
>
	{@render children()}
</button>

<style>
	button {
		box-shadow:
			inset -4px -4px 15px 0 color-mix(in srgb, var(--color-primary-lightest) 30%, transparent),
			inset 4px 4px 15px 0 color-mix(in srgb, var(--color-primary-lightest) 30%, transparent);
	}
</style>
