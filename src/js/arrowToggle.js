export default function arrowToggle(key, direction) {
  const removeArrow = document.getElementById('arrow');
  if (removeArrow) {
    removeArrow.remove();
  }

  const arrow = document.createElement('span');
  arrow.id = 'arrow';

  if (direction === 'up') {
    arrow.innerHTML = ' &#8595;';
  }
  if (direction === 'down') {
    arrow.innerHTML = ' &#8593;';
  }

  const currentTh = document.getElementById(key);
  currentTh.append(arrow);
}
