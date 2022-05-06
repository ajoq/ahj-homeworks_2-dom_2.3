import data from './startData';
import getTable from './getTable';
import intervalSort from './intervalSort';

getTable(data);

setInterval(intervalSort, 2000);
