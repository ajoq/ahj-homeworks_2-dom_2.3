import data from './startData';
import compare from './compare';
import clearTable from './clearTable';
import getTable from './getTable';
import arrowToggle from './arrowToggle';

export default function getSort(key, direction) {
  compare(key, direction, data);
  clearTable();
  getTable(data);
  arrowToggle(key, direction);
}
