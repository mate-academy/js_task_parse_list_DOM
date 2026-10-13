'use strict';

// sort list items by data attribute (desc)
function sortList(elementList, key) {
  const items = [...elementList.children];

  items.sort((a, b) => toNumber(b.dataset[key]) - toNumber(a.dataset[key]));

  elementList.append(...items);
}

// collect employees from the list
function getEmployees(elementList) {
  return [...elementList.children].map((item) => {
    const { position, salary, age } = item.dataset;

    return {
      name: item.textContent.trim(),
      position: position.trim(),
      salary: toNumber(salary),
      age: toNumber(age),
    };
  });
}

// "$5,000" -> 5000
function toNumber(value) {
  const result = Number(value.replaceAll('$', '').replaceAll(',', ''));

  return Number.isNaN(result) ? 0 : result;
}

sortList(document.querySelector('ul'), 'salary');
getEmployees(document.querySelector('ul'));
