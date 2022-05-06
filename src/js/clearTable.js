export default function clearTable() {
  const currentTableTr = Array.from(document.getElementById('tableBody').getElementsByTagName('tr'));
  currentTableTr.forEach((item) => item.remove());
}
