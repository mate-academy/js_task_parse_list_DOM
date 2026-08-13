'use strict';

const employees = document.querySelector('ul');

function toNumber(string) {
  return Number(string.replaceAll('$', '').replaceAll(',', ''));
}

function sortList(list) {
  const array = [...list.children];

  const sorted = array.sort((a, b) => {
    return toNumber(b.dataset.salary) - toNumber(a.dataset.salary);
  });

  list.append(...sorted);

  return sorted;
}

function getEmployees(people) {
  return people.map((person) => {
    const employee = {
      name: person.dataset.name || person.textContent.trim(),
      position: person.dataset.position,
      salary: toNumber(person.dataset.salary),
      age: Number(person.dataset.age),
    };

    return employee;
  });
}

getEmployees(sortList(employees));
