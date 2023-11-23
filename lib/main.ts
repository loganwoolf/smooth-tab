import "./styles.css";

export default class {
	reticle: HTMLDivElement;
	currentTarget: HTMLElement | null;

	constructor() {
		this.reticle = this.createReticle();
		this.currentTarget = null;
	}

	createReticle(): HTMLDivElement {
		const element = document.createElement("div");
		element.id = "reticle";
		element.style.display = "none";
		return element;
	}

	init(): void {
		document.body.appendChild(this.reticle);

		document.addEventListener("focusin", (e: FocusEvent) => {
			this.currentTarget = e.target as HTMLElement;
			this.moveReticleToTarget(this.reticle, this.currentTarget);
		});

		document.addEventListener("scroll", () => {
			this.moveReticleToTarget(this.reticle, this.currentTarget, true);
		});
	}

	moveReticleToTarget(
		reticle: HTMLDivElement,
		target: HTMLElement | null,
		snap = false,
	): void {
		if (target === null || document.activeElement === document.body) {
			reticle.style.display = "none";
			return;
		}

		reticle.style.display = "block";
		reticle.style.translate = `${target.offsetLeft - window.scrollX}px ${
			target.offsetTop - window.scrollY
		}px`;

		if (snap) {
			reticle.style.transitionDuration = "0ms";
		}

		const { offsetHeight, offsetWidth } = target;
		reticle.style.height = `${offsetHeight}px`;
		reticle.style.width = `${offsetWidth}px`;

		if (snap) {
			reticle.style.transitionDuration = "";
		}
	}
}
