'use strict';

const employees = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => {
    const prev = +a.dataset.salary
      .replace(',', '')
      .replace('$', '');

    const next = +b.dataset.salary
      .replace(',', '')
      .replace('$', '');

    return next - prev;
  });
  ul.append(...list);
}

function getEmployee(list) {
  return list.map(employee => ({
    name: employee.innerText,
    ...employee.dataset,
  }));
}

sortList(employees);
getEmployee(employees);
