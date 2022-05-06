const data = [
    {
      "id": 26,
      "title": "Побег из Шоушенка",
      "imdb": 9.30,
      "year": 1994
    },
    {
      "id": 25,
      "title": "Крёстный отец",
      "imdb": 9.20,
      "year": 1972
    },
    {
      "id": 27,
      "title": "Крёстный отец 2",
      "imdb": 9.00,
      "year": 1974
    },
    {
      "id": 1047,
      "title": "Тёмный рыцарь",
      "imdb": 9.00,
      "year": 2008
    },
    {
      "id": 223,
      "title": "Криминальное чтиво",
      "imdb": 8.90,
      "year": 1994
    }
  ]

function getTable(arrData) {
    const tableBody = document.getElementById('tableBody');

    arrData.forEach(item => {
        const tr = document.createElement('tr');
        tr.dataset.id = item.id;
        tr.dataset.title = item.title;
        tr.dataset.year = item.year;
        tr.dataset.imdb = item.imdb;
    
        const tdId = document.createElement('td');
        const tdtitle = document.createElement('td');
        const tdyear = document.createElement('td');
        const tdimdb = document.createElement('td');
    
        tdId.textContent = item.id;
        tdtitle.textContent = item.title;
        tdyear.textContent = '(' + item.year + ')';
        tdimdb.textContent = 'imdb: ' + item.imdb.toFixed(2);
    
        tr.append(tdId);
        tr.append(tdtitle);
        tr.append(tdyear);
        tr.append(tdimdb);
        tableBody.append(tr);
    });
}

getTable(data);


function compare(key, direction, dataSort) {
    if (key === 'title' && direction === 'up') {
       return  dataSort.sort( (a, b) => a.dataset.title.localeCompare(b.dataset.title) );
    }
    if (key === 'title' && direction === 'down') {
        return  dataSort.sort( (a, b) => b.dataset.title.localeCompare(a.dataset.title) );
     }
    if (direction === 'up') {
        return dataSort.sort( (a, b) => a.dataset[key] - b.dataset[key] );
    }
    if (direction === 'down') {
        return dataSort.sort( (a, b) => b.dataset[key] - a.dataset[key] );
    }
}

function getSort(key, direction) {
    const dataSort = Array.from(tableBody.getElementsByTagName('tr'));
    compare(key, direction, dataSort);

    dataSort.forEach(item => {
        tableBody.append(item);
    });    

    arrowToggle(key, direction);
}

// getSort('imdb', 'down');

function arrowToggle(key, direction) {

    const removeArrow = document.getElementById('arrow');
    removeArrow ? removeArrow.remove() : false;

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

