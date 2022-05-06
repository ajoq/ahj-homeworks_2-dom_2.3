export default function getTable(arrData) {
  const tableBody = document.getElementById('tableBody');

  arrData.forEach((item) => {
    const tr = document.createElement('tr');

    tr.dataset.id = item.id;
    tr.dataset.title = item.title;
    tr.dataset.year = item.year;
    tr.dataset.imdb = item.imdb;

    tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>(${item.year})</td>
        <td>imdb: ${item.imdb.toFixed(2)}</td>
    `;

    tableBody.append(tr);
  });
}
