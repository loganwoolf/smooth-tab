import sampleHTML from './sample.ts';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = sampleHTML();

const reticle = document.createElement('div')
reticle.id = 'reticle';
reticle.classList.add('hidden')
document.body.appendChild(reticle);


let currentTarget

document.addEventListener('focusin', (e) => {
  currentTarget = e.target
  moveReticleToTarget(currentTarget)
})

document.addEventListener('scroll', () => {
  keepReticlePositionWhenScrolling()
})

function moveReticleToTarget(target: HTMLElement, snap = false) {
  if (document.activeElement === document.body) {
    reticle.classList.add('hidden');
    return
  }
  reticle.classList.remove('hidden');
  reticle.style.translate = `${target.offsetLeft - window.scrollX}px   ${target.offsetTop - window.scrollY}px`
  let duration;
  if (snap) {
    duration = reticle.style.transitionDuration;
    reticle.style.transitionDuration = '0ms'
  }
  reticle.style.height = `${target.offsetHeight}px`
  reticle.style.width = `${target.offsetWidth}px`
  if (snap) {
    reticle.style.transitionDuration = duration
  }
}

function keepReticlePositionWhenScrolling() {
  moveReticleToTarget(currentTarget, true)
}
