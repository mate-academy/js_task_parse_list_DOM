'use strict';

const employees = [...document.querySelectorAll('li')];
const employList = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => convertSalary(b) - convertSalary(a));
  employList.append(...list);
};

function convertSalary(elem) {
  const result = elem.dataset.salary.replaceAll(',', '').substring(1);

  return result;
}

function getEmployees(list) {
  const result = list.map(elem => ({
    name: elem.textContent,
    position: elem.dataset.position,
    salary: elem.dataset.salary,
    age: elem.dataset.age,
  })
  );

  return result;
}

sortList(employees);
getEmployees(employees);
