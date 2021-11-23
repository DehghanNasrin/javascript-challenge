const DATA_SOURCE = data;

let filterBtn = d3.select("#filter-btn");
filterBtn.on("click", function () {
  tbody.html("");

  let inputEl = d3.select("#input");
  let inputValue = inputEl.property("value");
  let filteredDeta = filterData(inputValue);
  applyFilter(filteredDeta);
});

let reloadBtn = d3.select("#reload-filter");
reloadBtn.on("click", function () {
  tbody.html("");

  initialize(DATA_SOURCE);
});

let tbody = d3.select("tbody");

function initialize(dataSource) {
  dataSource.forEach(function (element) {
    let row = tbody.append("tr");

    Object.entries(element).forEach(function ([key, value]) {
      let cell = row.append("td");
      cell.text(value);
    });
  });
}

function applyFilter(dataset) {
  initialize(dataset);
}

function filterData(inputValue) {
  return DATA_SOURCE.filter(
    (item) =>
      item.city === inputValue ||
      item.datetime === inputValue ||
      item.country === inputValue ||
      item.shape === inputValue ||
      item.state === inputValue
  );
}

(function () {
  initialize(DATA_SOURCE);
})();
