'use strict';

function sortList(list) {
  const employees = Array.from(list);

  employees.sort((a, b) => {
    const salaryA = parseFloat(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = parseFloat(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  const listContainer = document.querySelector('ul');

  employees.forEach((employee) => {
    listContainer.appendChild(employee);
  });
}

function getEmployees(list) {
  return Array.from(list).map((employee) => {
    return {
      name: employee.innerText.trim(),
      position: employee.dataset.position,
      salary: parseFloat(employee.dataset.salary.replace(/[$,]/g, '')),
      age: parseInt(employee.dataset.age),
    };
  });
}

const employeeList = document.querySelectorAll('li');

sortList(employeeList);
getEmployees(employeeList);
