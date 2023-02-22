'use strict';

const list = document.querySelector('ul');

const sortList = listOfEmployees => {
  const employees = [...listOfEmployees.children];

  employees
    .sort((a, b) => {
      return convertToNumber(b.dataset.salary)
        - convertToNumber(a.dataset.salary);
    })
    .map(person => list.append(person));

  return employees;
};

const convertToNumber = salary => {
  return Number(salary.split('$').join('').replace(',', '.'));
};

const getEmployees = listOfEmployees => {
  const employees = [...listOfEmployees.children];

  return employees.map(person => ({
    name: person.textContent.trim(),
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
};

sortList(list);

getEmployees(list);
