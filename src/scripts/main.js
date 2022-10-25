'use strict';

function getSalary(employee) {
  return +employee.dataset.salary.replaceAll(',', '').slice(1);
}

function sortList(list) {
  const sortedList = [...list.children].sort((employeeA, employeeB) => {
    const salaryA = getSalary(employeeA);
    const salaryB = getSalary(employeeB);

    return salaryB - salaryA;
  });

  list.append(...sortedList);
}

function getEmployees(list) {
  return [...list.children].map(employee => {
    const employeeName = employee.textContent.trim();
    const { position, salary, age } = employee.dataset;

    return {
      name: employeeName,
      position,
      salary,
      age,
    };
  });
}

const employeesList = document.querySelector('ul');

sortList(employeesList);
getEmployees(employeesList);
