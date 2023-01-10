'use strict';

const employeesList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function correctSalaryNum(salary) {
  return Number(salary.split(',').join('').slice(1));
}

function sortList(list) {
  const sortedList = list.sort((a, b) => {
    return (correctSalaryNum(b.dataset.salary)
      - correctSalaryNum(a.dataset.salary));
  });

  employeesList.append(...sortedList);
}

function getEmployees(list) {
  return list.map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: +employee.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);
