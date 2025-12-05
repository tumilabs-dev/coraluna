import { expoInOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

export function showMobileMenu(node: Element): TransitionConfig {
	return {
		duration: 400,
		delay: 0,
		easing: expoInOut,
		css: (t) => {
			const opacity = t;
			const scale = t * 0.4 + 0.6;

			return `
                opacity: ${opacity};
                transform: scale(${scale});
                transform-origin: top center;
			`;
		}
	};
}
