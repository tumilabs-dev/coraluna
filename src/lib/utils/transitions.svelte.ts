import { cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

type TransitionOptions = {
	duration?: number;
	delay?: number;
	easing?: (t: number) => number;
	direction?: "in" | "out";
	onDone?: () => void;
	onStart?: () => void;
};

/**
 * Custom overlay transition that fades from opacity 0 to 1
 */
export function pageOverlay(node: Element, options: TransitionOptions = {}): TransitionConfig {
	const { duration = 300, delay = 0, easing = cubicOut, direction = "in", onDone } = options;
	return {
		duration,
		delay,
		easing,
		css: (t) => {
			const scale = 0.95 + t * 0.05;
			const borderRadius = 24 - t * 24;
			const opacity = direction === "in" ? t : 1 - t;
			const borderThickness = 4 - t * 3;

			return `
				transform: scale(${scale});
                border-radius: ${borderRadius}px;    
                opacity: ${opacity};
				border: ${borderThickness}px solid #647e95;
			`;
		}
	};
}

/**
 * Custom scale and fade transition
 */
export function pageTransitionAnimation(
	node: Element,
	options: TransitionOptions
): TransitionConfig {
	const {
		duration = 300,
		delay = 0,
		easing = cubicOut,
		direction = "in",
		onDone,
		onStart
	} = options;

	return {
		duration,
		delay,
		easing,
		css: (t) => {
			const scale = 0.95 + t * 0.05;
			const borderRadius = 24 - t * 24;
			const borderThickness = 4 - t * 4;

			if (onStart && t === (direction === "in" ? 0 : 1)) {
				onStart();
			}

			return `
				transform: scale(${scale});
                border-radius: ${borderRadius}px;
				overflow: hidden;
				border: ${borderThickness}px solid #FFFFFF80;


			`;
		}
	};
}
