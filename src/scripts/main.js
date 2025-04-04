'use strict';

const employeesList = document.querySelector('ul');
const employeesListItems = document.querySelectorAll('li');

const sortList = (list) => {
  const sortedListItems = [...list].sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  employeesList.innerHTML = '';

  sortedListItems.forEach((item) => employeesList.append(item));

  return sortedListItems;
};

const parseSalary = (str) => {
  return +str.slice(1).split(',').join('');
};

const getEmployees = (list) => {
  return [...list].map((employee) => ({
    name: employee.textContent,
    position: employee.dataset.position,
    salary: parseSalary(employee.dataset.salary),
    age: +employee.dataset.age,
  }));
};

// eslint-disable-next-line no-unused-vars
const sortedList = sortList(employeesListItems);

getEmployees(employeesListItems);
