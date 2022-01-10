'use strict';

const listLi = [...document.querySelectorAll('li')];
const listUl = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) =>
    b.dataset.salary.replace(/\D/g, '') - a.dataset.salary.replace(/\D/g, '')
  );

  listUl.append(...list);
};

function getEmployees(list) {
  return list.map(employees => ({
    name: employees.innerText,
    position: employees.getAttribute(['data-position']),
    salary: employees.getAttribute(['data-salary']),
    age: employees.getAttribute(['data-age']),
  }));
};

sortList(listLi);
getEmployees(listLi);
