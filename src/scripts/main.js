'use strict';

const employeesList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

const parseSalary = (salary) => parseInt(salary.replace(',', '').slice(1));

const sortList = (list) => {
  list.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  employeesList.append(...list);
};

const getEmployees = (list) =>
  list.map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));

sortList(employees);
getEmployees(employees);
