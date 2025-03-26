'use strict';

const employeesList = document.querySelector('ul');

function convertStringToNumber(string) {
  return Number(string.replace(/[$,]/g, ''));
}

function sortList(list) {
  const empList = [...list.children];

  empList.sort((a, b) => {
    const salaryA = convertStringToNumber(a.dataset.salary);
    const salaryB = convertStringToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  empList.forEach((employee) => list.appendChild(employee));
}

function getEmployees(list) {
  const empList = [...list.children];

  return empList.map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(employeesList);
getEmployees(employeesList);
