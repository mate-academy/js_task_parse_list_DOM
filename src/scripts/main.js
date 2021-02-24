'use strict';

const employees = document.querySelector('ul');

const stringToNumber = (string) => {
  return Number(string.match(/\d/g).join(''));
};

const sortList = (list) => {
  const employee = list.children;

  const sortedEmployees = [...employee].sort((employee1, employee2) => (
    stringToNumber(employee2.dataset.salary)
    - stringToNumber(employee1.dataset.salary)
  ));

  list.append(...sortedEmployees);

  return sortedEmployees;
};

const getEmployees = (list) => {
  const employee = list.children;

  return [...employee].map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
};

sortList(employees);
getEmployees(employees);
