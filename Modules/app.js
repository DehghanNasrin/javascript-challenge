import {
    tbody,
    applyFilter,
    initialize,
    filterData,
    DATA_SOURCE
} from "./module.js";

(function () {
    initialize(DATA_SOURCE);
})();

let filterBtn = d3.select('#filter-btn');
filterBtn.on('click', function () {
    tbody.html('');

    let inputEl = d3.select('#input');
    let inputValue = inputEl.property('value');
    let filteredDeta = filterData(inputValue);
    applyFilter(filteredDeta);
});

let reloadBtn= d3.select('#reload-filter');
reloadBtn.on('click', function(){
    tbody.html('');

    initialize(DATA_SOURCE);
});