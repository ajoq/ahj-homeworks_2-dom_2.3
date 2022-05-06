export default function compare(key, direction, dataSort) {
  if (key === 'title' && direction === 'up') {
    dataSort.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (key === 'title' && direction === 'down') {
    dataSort.sort((a, b) => b.title.localeCompare(a.title));
  }
  if (direction === 'up') {
    dataSort.sort((a, b) => a[key] - b[key]);
  }
  if (direction === 'down') {
    dataSort.sort((a, b) => b[key] - a[key]);
  }
}
