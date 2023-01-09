'use strict';

const list = document.getElementsByTagName('ul')[0];

const getNumber = (salary) => {
  return Number(salary
    .replace(',', '')
    .replace('$', ''));
};

const sortList = (employeesList) => {
  const employees = [...employeesList.children];

  employees.sort((li1, li2) => (
    getNumber(li2.dataset.salary) - getNumber(li1.dataset.salary)));

  for (const person of employees) {
    list.append(person);
  }
};

sortList(list);
