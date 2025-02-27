'use strict';

const list = document.querySelector('ul');

function convert(emloyee) {
  return Number(emloyee.dataset.salary.slice(1).replaceAll(',', ''));
}

function sortList(listEmp) {
  const employeesArray = Array.from(listEmp.children);

  employeesArray.sort((emp1, emp2) => {
    return convert(emp2) - convert(emp1);
  });

  employeesArray.forEach((emp) => list.appendChild(emp));
}

function getEmployees(listEmp) {
  const employeesArray = Array.from(listEmp.children);

  return employeesArray.map((emp) => {
    return {
      name: emp.textContent,
      position: emp.dataset.position,
      salary: emp.dataset.salary,
      age: emp.dataset.age,
    };
  });
}

sortList(list);
getEmployees(list);
