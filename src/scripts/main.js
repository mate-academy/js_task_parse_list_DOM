'use strict';

function sortList(list) {
  const employeesCopy = [...list.children];

  employeesCopy
    .sort((a, b) => {
      const firstSalary = +a.dataset.salary.replaceAll(/[$,]/g, '');
      const secondSalary = +b.dataset.salary.replaceAll(/[$,]/g, '');

      return secondSalary - firstSalary;
    });

  employeesCopy.forEach((emp) => employeesList.append(emp));
}

function getEmployees(list) {
  return [...list.children].map((emp) => ({
    name: emp.innerText,
    position: emp.dataset.position,
    salary: emp.dataset.salary,
    age: emp.dataset.age,
  }));
}

const employeesList = document.querySelector('ul');

sortList(employeesList);
getEmployees(employeesList);
