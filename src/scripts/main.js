'use strict';

const listOfEmployees = document.querySelector('ul');

function sortList(list) {
  const employees = Array.from(list.querySelectorAll('li'));

  employees.sort((a, b) => {
    return (
      convertSalaryToNumber(b.dataset.salary) -
      convertSalaryToNumber(a.dataset.salary)
    );
  });

  employees.forEach((employee) => {
    list.appendChild(employee);
  });
}

function getEmployees(list) {
  const employees = Array.from(list.children);

  return employees.map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: convertSalaryToNumber(employee.dataset.salary),
      age: +employee.dataset.age,
    };
  });
}

function convertSalaryToNumber(salary) {
  return Number(salary.replaceAll('$', '').replaceAll(',', ''));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
