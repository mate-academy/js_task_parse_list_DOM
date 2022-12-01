'use strict';

const employeesList = document.querySelector('ul');
const employees = [...employeesList.children];

const convertSalary = salary =>
  Number(salary.replace('$', '').split(',').join(''));

const sortList = list => {
  const sortedList = list.sort((a, b) =>
    convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary));

  employeesList.append(...sortedList);
};

const getEmployees = list =>
  list.map(employee => {
    const { position, salary, age } = employee.dataset;

    return {
      name: employee.innerText,
      position,
      salary,
      age,
    };
  });

sortList(employees);
getEmployees(employees);
