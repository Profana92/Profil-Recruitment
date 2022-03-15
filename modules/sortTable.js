export { sortTable };

function sortTable(n) {
  let table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;

  table = document.querySelector("#userTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.querySelectorAll("tr");
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].querySelectorAll("td")[n];
      y = rows[i + 1].querySelectorAll("td")[n];
      let xContent = isNaN(x.innerHTML)
        ? x.innerHTML.toLowerCase() === "-"
          ? 0
          : x.innerHTML.toLowerCase()
        : parseFloat(x.innerHTML);
      let yContent = isNaN(y.innerHTML)
        ? y.innerHTML.toLowerCase() === "-"
          ? 0
          : y.innerHTML.toLowerCase()
        : parseFloat(y.innerHTML);
      if (dir == "asc") {
        if (xContent > yContent) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (xContent < yContent) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
