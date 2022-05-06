export default function getTable(arrData) {
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
};
