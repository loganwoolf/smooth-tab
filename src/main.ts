import './style.css';

/**
 * Initializes and returns the reticle element.
 * @returns {HTMLDivElement} The reticle element.
 */
export default function init(): HTMLDivElement {
  const reticle: HTMLDivElement = document.createElement('div');
  reticle.id = 'reticle';
  reticle.classList.add('hidden');
  document.body.appendChild(reticle);

  let currentTarget: HTMLElement;

  document.addEventListener('focusin', (e: FocusEvent) => {
    currentTarget = e.target as HTMLElement;
    moveReticleToTarget(reticle, currentTarget);
  });
  
  document.addEventListener('scroll', () => {
    moveReticleToTarget(reticle, currentTarget, true)
  });

  return reticle;
}

/**
 * Moves the reticle to the target element.
 * @param target - The target element to move the reticle to.
 * @param snap - Whether to snap the reticle to the target element.
 * @returns void
 */
function moveReticleToTarget(reticle: HTMLDivElement, target: HTMLElement, snap: boolean = false): void {
  if (document.activeElement === document.body) {
    reticle.classList.add('hidden');
    return;
  }
  reticle.classList.remove('hidden');
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

// init();
