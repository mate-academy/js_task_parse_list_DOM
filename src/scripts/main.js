'use strict';

function convertSalaryToNumber(salary) {
  return Number(
    salary
      .slice(1)
      .replaceAll(',', '')
  );
}

function convertSalaryToString(salary) {
  return `$${salary.toLocaleString('en')}`;
}

function createEmployeeElement(employee) {
  return `
    <li
      data-position="${employee.position}"
      data-salary="${convertSalaryToString(employee.salary)}"
      data-age="${employee.age}"
    >
    ${employee.name}
    </li>`;
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
  const sortedEmployees = getEmployees(list)
    .sort((employeePrevious, employeeCurrent) => (
      employeeCurrent.salary - employeePrevious.salary
    ));

  const employeesSortedElementsList = sortedEmployees
    .map(employee => createEmployeeElement(employee));

  return employeesSortedElementsList;
}

const employeesElementsList = document.querySelector('ul');
const employeesElementsSortedList = sortList(employeesElementsList);

employeesElementsList.innerHTML = employeesElementsSortedList.join('');
