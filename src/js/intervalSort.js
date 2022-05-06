import getSort from './getSort';

let intervalCount = 0;
const intervalArr = [
  ['up', 'id'],
  ['down', 'id'],

  ['up', 'title'],
  ['down', 'title'],

  ['up', 'year'],
  ['down', 'year'],

  ['up', 'imdb'],
  ['down', 'imdb'],
];

export default function intervalSort() {
  const direction = intervalArr[intervalCount][0];
  const key = intervalArr[intervalCount][1];

  getSort(key, direction);

  intervalCount += 1;
  if (intervalCount === 8) {
    intervalCount = 0;
  }
}
