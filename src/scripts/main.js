'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = [...listOfEmployees.children];

function sortList(list) {
  function employeeSalary(employee) {
    return employee.dataset.salary
      .slice(1)
      .replace(/,/gi, '');
  };

  const sortedList = list
    .sort((a, b) => +employeeSalary(b) - +employeeSalary(a));

  listOfEmployees.append(...sortedList);
};

function getEmployees(list) {
  return list.map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
};

sortList(employees);
getEmployees(employees);
