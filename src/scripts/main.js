'use strict';

function convertSalaryToNumber(salary) {
  return Number(
    salary
      .slice(1)
      .replaceAll(',', '')
  );
}

function getEmployees(list) {
  return [...list.children].map(child => (
    {
      name: child.innerText,
      position: child.dataset.position,
      salary: convertSalaryToNumber(child.dataset.salary),
      age: Number(child.dataset.age),
    }
  ));
}

function sortList(list) {
  const listCopy = [...list.children];

  listCopy.sort((employeeElementA, employeeElementB) => (
    convertSalaryToNumber(employeeElementB.dataset.salary)
    - convertSalaryToNumber(employeeElementA.dataset.salary)
  ));

  list.append(...listCopy);
}

const employeesElementsList = document.querySelector('ul');

sortList(employeesElementsList);

window.console.log(getEmployees(employeesElementsList));
