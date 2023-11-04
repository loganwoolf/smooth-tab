import './style.css';

class SmoothTab {
  reticle: HTMLDivElement;
  currentTarget: HTMLElement | null;
  constructor() {
    this.reticle = this.createReticle()
    this.currentTarget = null;

    this.init();
  }

  createReticle() {
    const element = document.createElement('div');
    element.id = 'reticle';
    element.style.display = 'none';
    return element
  }

  init(): void {
    document.body.appendChild(this.reticle);

    document.addEventListener('focusin', (e: FocusEvent) => {
      this.currentTarget = e.target as HTMLElement;
      this.moveReticleToTarget(this.reticle, this.currentTarget);
    });

    document.addEventListener('scroll', () => {
      this.moveReticleToTarget(this.reticle, this.currentTarget, true)
    });
  }

  moveReticleToTarget(reticle: HTMLDivElement, target: HTMLElement | null, snap: boolean = false): void {
    if (!target || document.activeElement === document.body) {
      reticle.style.display = 'none';
      return;
    }
    reticle.style.display = 'block';
    reticle.style.translate = `${target.offsetLeft - window.scrollX}px ${target.offsetTop - window.scrollY}px`;

    let duration: string = reticle.style.transitionDuration;
    if (snap) {
      reticle.style.transitionDuration = '0ms';
    }
    reticle.style.height = `${target.offsetHeight}px`;
    reticle.style.width = `${target.offsetWidth}px`;
    if (snap) {
      reticle.style.transitionDuration = duration;
    }
  }
}

const smoothTab = new SmoothTab();

console.log(smoothTab)