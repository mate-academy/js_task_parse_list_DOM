'use strict';

// write code here

const salaryToNumber = (salary) => (
  +salary.replace('$', '').replace(',', '')
);

const listEmployees = document.querySelectorAll('li');
const ulElement = document.querySelector('ul');

const sortList = (list) => {
  const sortedList = [...list].sort((employeeFirst, employeeSecond) => (
    salaryToNumber(employeeSecond.dataset.salary)
    - salaryToNumber(employeeFirst.dataset.salary)
  ));

  sortedList.forEach(employee => (
    ulElement.append(employee)
  ));
};

const getEmployees = (list) => {
  const objEmployees = [];

  [...list].forEach(employee => (
    objEmployees.push({
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    })
  ));

  return objEmployees;
};

sortList(listEmployees);
// eslint-disable-next-line no-console
console.log(getEmployees(listEmployees));
