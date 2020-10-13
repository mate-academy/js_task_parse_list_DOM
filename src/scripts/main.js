'use strict';

const personList = document.querySelector('ul');
const person = [...document.querySelectorAll('li')];

function salaryToNumber(salary) {
  return +salary.replace(/,/g, '').slice(1);
}

function sortList(list) {
  list.sort((a, b) => (
    salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary)
  ));

  personList.append(...list);
}

function getEmployees(list) {
  return list.map(elem => (
    {
      'name': elem.innerText,
      ...elem.dataset,
    })
  );
}

sortList(person);
getEmployees(person);
