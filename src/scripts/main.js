'use strict';

const employees = document.querySelector('ul');

function sortList(list) {
  const employeesArr = [...list.children];

  employeesArr.sort((a, b) => {
    return b.dataset.salary.slice(1).replace(',', '')
      - a.dataset.salary.slice(1).replace(',', '');
  });

  for (const employee of employeesArr) {
    list.append(employee);
  }
}

function getEmployees(list) {
  const employeesArr = [...list.children].map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });

  return employeesArr;
}

sortList(employees);

getEmployees(employees);
