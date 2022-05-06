import data from './startData';
import getTable from './getTable';
import intervalSort from './intervalSort';

getTable(data);

let intervalId = setInterval(intervalSort, 2000);