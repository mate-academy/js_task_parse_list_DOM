'use strict';

const startList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

const convertToNumber = salary => +salary.slice(1).split(',').join('');

function sortList(list) {
  const sortedList = list.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary)
  );

  startList.append(...sortedList);
}

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerHTML, ...person.dataset,
  }));
}

sortList(employees);
getEmployees(employees);
