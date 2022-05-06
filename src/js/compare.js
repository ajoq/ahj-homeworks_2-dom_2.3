export default function compare(key, direction, dataSort) {
  if (key === 'title' && direction === 'up') {
    dataSort.sort((a, b) => a.dataset.title.localeCompare(b.dataset.title));
  }
  if (key === 'title' && direction === 'down') {
    dataSort.sort((a, b) => b.dataset.title.localeCompare(a.dataset.title));
  }
  if (direction === 'up') {
    dataSort.sort((a, b) => a.dataset[key] - b.dataset[key]);
  }
  if (direction === 'down') {
    dataSort.sort((a, b) => b.dataset[key] - a.dataset[key]);
  }
}
