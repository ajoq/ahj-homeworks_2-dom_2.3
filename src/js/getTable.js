export default function getTable(arrData) {
  const tableBody = document.getElementById('tableBody');

  arrData.forEach((item) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>(${item.year})</td>
        <td>imdb: ${item.imdb.toFixed(2)}</td>
    `;

    tableBody.append(tr);
  });
}
