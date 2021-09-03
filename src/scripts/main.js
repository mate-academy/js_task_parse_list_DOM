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

function sortList() {
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

  people.sort((a, b) => b.salary - a.salary);

  let i = 0;

  people.map((person) => {
    for (i; i < list.length; i++) {
      list[i].innerText = person.name;
      i++;

      return person;
    }
  }
  );

  return list;
}

getEmployees(list);
sortList(list);
