import { gsap } from "gsap";

type AnimationType = keyof typeof gsap;

interface AnimationOptions extends GSAPTweenVars {
	type: AnimationType;
}

export function animate(
	node: HTMLElement,
	{ type, ...args }: AnimationOptions
): { destroy?: () => void } {
	const method = gsap[type] as
		| ((target: gsap.TweenTarget, vars: GSAPTweenVars) => GSAPTween)
		| undefined;

	if (!method) {
		console.warn(`GSAP method "${type}" does not exist.`);
		return {};
	}

	// Create the animation
	const tween = method(node, args);

	return {
		destroy() {
			// Kill the animation when the element is removed
			tween.kill();
		}
	};
}
