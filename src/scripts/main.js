'use strict';

const listOfEmployees = document.querySelector('ul');

function sortList(list) {
  function salaryToNumber(salary) {
    return +salary.slice(1).replace(',', '.');
  }

  const result = [...list.children].sort((a, b) =>
    salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary));

  list.append(...result);
}

function getEmployees(list) {
  return [...list.children].map(el => ({
    name: el.innerText, ...el.dataset,
  }));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
