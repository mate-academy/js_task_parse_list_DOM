'use strict';

const list = document.querySelectorAll('li');

function getEmployees() {
  const people = [...list].map(function(item) {
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

function sortList() {
  const people = list.map((item) => Object.assign({}, item));

  people.sort((a, b) => b.salary - a.salary);

  return people;
}

getEmployees();
sortList();
