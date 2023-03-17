'use strict';

const listItems = [...document.querySelectorAll('li')];
const list = document.querySelector('ul');

function sortList(li) {
  function toNumber(salary) {
    return +salary.slice(1).split(',').join('');
  }

  return list.append(...li
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary)));
}

const getEmployees = (listEmp) =>
  listEmp.map(item => ({
    name: item.innerText,
    ...item.dataset,
  }));

sortList(listItems);
getEmployees(listItems);
