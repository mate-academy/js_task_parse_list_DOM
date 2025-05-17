'use strict';

const employeesList = document.querySelector('ul');

function getCleanSalary(salaryFromLi) {
  return parseInt(salaryFromLi.slice(1).replaceAll(',', ''));
}

function sortList(list) {
  const employeesArray = Array.from(list.children);

  employeesArray.sort(
    (a, b) =>
      getCleanSalary(b.getAttribute('data-salary')) -
      getCleanSalary(a.getAttribute('data-salary')),
  );
  employeesArray.forEach((emp) => employeesList.appendChild(emp));
}

function getEmployees(list) {
  const employeesArray = Array.from(list.children);

  return employeesArray.map((emp) => {
    return {
      name: emp.textContent.split(',')[0],
      position: emp.getAttribute('data-position'),
      salary: emp.dataset.salary,
      age: emp.dataset.age,
    };
  });
}

sortList(employeesList);
getEmployees(employeesList);
