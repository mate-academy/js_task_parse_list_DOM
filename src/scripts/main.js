'use strict';

const employees = document.querySelector('ul');

function sortList(list) {
  function converToNumber(number) {
    return +number.split(',').join('').slice(1);
  }

  const result = [...list.children].sort((a, b) =>
    converToNumber(b.dataset.salary) - converToNumber(a.dataset.salary));

  employees.append(...result);
}

function getEmployees(list) {
  [...list.children].map(el => ({
    name: el.innerText, ...el.dataset,
  }));
}

sortList(employees);
getEmployees(employees);
