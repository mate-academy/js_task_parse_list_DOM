'use strict';

const employeesList = document.querySelectorAll('li');
const listUl = document.querySelector('ul');

const sortList = list => {
  const newList = [...list];

  newList.sort((a, b) => {
    return convert(b.dataset.salary) - convert(a.dataset.salary);
  });

  listUl.append(...newList);
};

const convert = string => {
  return +string.slice(1).split(',').join('');
};

const getEmployees = list => {
  const employees = [];

  for (const person of list) {
    employees.push({
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });
  }

  return employees;
};

sortList(employeesList);
getEmployees(employeesList);
