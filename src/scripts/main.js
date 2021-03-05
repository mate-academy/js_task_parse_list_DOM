'use strict';

const employees = [...document.querySelectorAll('li')];

const getNumbersFromString = (string) => {
  return string.split('').filter(value =>
    Number.isInteger(+value)).join('');
};

const sortBySalary = (previousEmployee, currentEmployee) => {
  const previousEmployeeSalary = getNumbersFromString(previousEmployee
    .dataset.salary);
  const currentEmployeeSalary = getNumbersFromString(currentEmployee
    .dataset.salary);

  return currentEmployeeSalary - previousEmployeeSalary;
};

function sortList(list) {
  document.querySelector('ul').append(...list.sort(sortBySalary));
}

const getObjectFromAttributes = employee => {
  return {
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  };
};

function getEmployees(list) {
  return list.map(getObjectFromAttributes);
}

sortList(employees);
getEmployees(employees);
