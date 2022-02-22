'use strict';

const employees = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => {
    const aa = +a.dataset.salary
      .replace(',', '')
      .replace('$', '');

    const bb = +b.dataset.salary
      .replace(',', '')
      .replace('$', '');

    return bb - aa;
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
