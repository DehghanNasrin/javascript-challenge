const DATA_SOURCE = data;

let tbody = d3.select('tbody');

export function initialize(dataSource) {
    dataSource.forEach(function(element) {
        let row = tbody.append('tr');

        Object.entries(element).forEach(function ([key, value]) {
            let cell = row.append('td');
            cell.text(value);
        });
    });
};

export function applyFilter(dataset) {
    initialize(dataset);
};

export function filterData(inputValue) {
    return DATA_SOURCE.filter((item) => item.city === inputValue ||
        item.datetime === inputValue ||
        item.country === inputValue ||
        item.shape === inputValue ||
        item.state === inputValue);
};

export {tbody, DATA_SOURCE}