'use strict';

function getCorrectSum(sum) {
  return +sum.slice(1).split(',').join('');
}

const employeesList = document.querySelector('ul');

function sortList(list) {
  const employees = list.children;
  const salary = [...employees].sort((item1, item2) => getCorrectSum(
    item2.dataset.salary) - getCorrectSum(item1.dataset.salary),
  );

  employeesList.append(...salary);
}

function getEmployees(list) {
  const employees = list.children;

  return [...employees].map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(employeesList);
getEmployees(employeesList);
