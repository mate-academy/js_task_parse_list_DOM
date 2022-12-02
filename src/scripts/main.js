'use strict';

const employeesList = document.querySelector('ul');
const employeesElements = [...employeesList.children];

const convertSalary = employeesElement => (
  +(employeesElement.dataset.salary
    .slice(1).split(',').join(''))
);

const sortList = list => {
  list.sort((a, b) => convertSalary(b) - convertSalary(a));

  return employeesList.append(...employeesElements);
};

const getEmployees = list => list.map(
  worker => ({
    name: worker.innerText,
    ...worker.dataset,
  }));

sortList(employeesElements);
getEmployees(employeesElements);
