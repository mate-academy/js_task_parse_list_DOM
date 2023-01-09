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

const getEmployees = (employeesList) => {
  const employees = [...employeesList.children];

  return employees.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
};

sortList(list);
getEmployees(list);
