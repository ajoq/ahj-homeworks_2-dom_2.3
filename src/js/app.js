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

//   console.log(data);

  // Сгенерировать таблицу
  // Вставить ее в дом дерево
  // Сделать сортировку

//   function createTable(data) {
//       const table = document.createElement('table');
//   }

// const table = document.createElement('table');
// const thead = document.createElement('thead');
// table.append(thead);
// console.log(table);

const table = document.getElementById('table');
const tableBody = document.getElementById('tableBody');

// const tr = document.createElement('tr');
// console.log(tr);
// tr.dataset.id = 26;
// const td = document.createElement('td');
// td.textContent = 26;
// tr.append(td);
// tableBody.append(tr);
// console.log(tableBody);



// data.forEach(item => {
//     // console.log(item);
//     const tr = document.createElement('tr');
//     for (let key in item) {
//         // console.log(key);
//         tr.dataset[key] = item[key];
//         const td = document.createElement('td');
//         td.textContent = item[key]
//         tr.append(td);
//     }
//     tableBody.append(tr);
// });

data.forEach(item => {
    // console.log(item);
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

const dataSort = Array.from(tableBody.getElementsByTagName('tr'));
console.log(dataSort);
console.log(typeof(dataSort[4].dataset.id));

// function compareId(a, b) {
//     if (+a.dataset.id > +b.dataset.id) return 1;
//     if (+a.dataset.id == +b.dataset.id) return 0;
//     if (+a.dataset.id < +b.dataset.id) return -1;
// }

// function compareId(a, b) {return a.dataset.id - b.dataset.id;};

// function compareYear(a, b) {return a.dataset.year - b.dataset.year;}

// function compareImdb(a, b) {return a.dataset.imdb - b.dataset.imdb;}

// function compareTitle(a, b){
//     return a.dataset.title.localeCompare(b.dataset.title);
// }

function compare(key, direction) {
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

compare('id', 'up');

// dataSort.sort(compareItems(id));
// console.log(dataSort);
// console.log(dataSort[0].dataset);

dataSort.forEach(item => {
    tableBody.append(item);
});


