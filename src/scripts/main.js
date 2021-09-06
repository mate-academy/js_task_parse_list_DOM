'use strict';

const list = document.querySelectorAll('li');

function getEmployees() {
  const people = [...list].map((item) => {
    const result = {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: parseFloat(item.getAttribute('data-salary')
        .replace(',', '').replace('$', '')),
      age: parseInt(item.getAttribute('data-age')),
    };

    return result;
  });

  return people;
}

function sortList(parameters) {
  const items = [...parameters];

  items.sort((a, b) => parseFloat(
    b.dataset.salary.replace(',', '').replace('$', ''))
    - parseFloat(a.dataset.salary.replace(',', '').replace('$', '')));

  for (const item of items) {
    document.querySelector('ul').appendChild(item);
  }

  return items;
}

getEmployees(list);
sortList(list);
