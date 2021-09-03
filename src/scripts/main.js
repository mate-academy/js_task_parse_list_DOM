'use strict';

function getEmployees(list = document.getElementsByTagName('li')) {
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

function sortList(list = getEmployees()) {
  const people = list.map((item) => Object.assign({}, item));

  people.sort((a, b) => b.salary - a.salary);

  return people;
}

sortList();
