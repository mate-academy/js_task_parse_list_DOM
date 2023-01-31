'use strict';

const employeesList = document.querySelector('ul');

const employees = [...document.querySelectorAll('li')];

function correctSalary(salary) {
  return Number(salary.split(',').join('').slice(1));
}

function sortList(list) {
  const sortedList = list.sort((a, b) => {
    return (correctSalary(b.dataset.salary)
      - correctSalary(a.dataset.salary));
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
