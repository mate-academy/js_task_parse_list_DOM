'use strict';

const employeesList = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function sortList(list) {
  const sortedEmployees = [...list]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  employeesList.append(...sortedEmployees);
}

function getEmployees(list) {
  return [...list].map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: toNumber(employee.dataset.salary),
    age: employee.dataset.age,
  }));
}

/**
 * Converts the specified string to number.
 *
 * @param {string} string string to be converted to number.
 *
 * @returns {number} number.
 */
function toNumber(string) {
  return Number(string.match(/\d+/g).join(''));
}

getEmployees(employees);
sortList(employees);
