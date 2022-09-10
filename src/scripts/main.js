'use strict';

// write code here
const employees = document.querySelectorAll('li[data-salary]');
const list = document.querySelector('ul');

function valuesToNumber(string) {
  return string.replace(',', '.').slice(1);
}

function sortList(workers) {
  const sorted
  = [...workers].sort((a, b) =>

    valuesToNumber(b.dataset.salary) - valuesToNumber(a.dataset.salary));

  list.append(...sorted);
}

function getEmployees(workers) {
  const arr = [...workers].map(elem => {
    return {
      name: elem.innerText,
      ...elem.dataset,
    };
  });

  return arr;
}

sortList(employees);
getEmployees(employees);
