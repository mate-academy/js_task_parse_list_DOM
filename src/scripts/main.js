'use strict';

const employeesULElement = document.querySelector('ul');
const employeesList = Array.from(employeesULElement.children);

const parseSalary = (salary) => +salary.replace(/\D/g, '');

/**
 * @typedef {Object} Employee
 * @property {string} name - Employee name
 * @property {string} position - Employee position
 * @property {number} salary - Employee salary
 * @property {number} age - Employee age
 */

/**
 * Gets employees data from HTMLLIElement list
 * @param {HTMLLIElement[]} list - List of employees
 * @returns {Employee[]} - Array of employees data
 */
function getEmployees(list) {
  return list.map((employee) => {
    const { position, salary: salaryRaw, age } = employee.dataset;
    const salary = parseSalary(salaryRaw);

    return {
      name: employee.innerText,
      position,
      salary,
      age: +age,
    };
  });
}

/**
 * Sorts employees list by salary in descending order
 * @param {Element[]} list - List of employees
 */
function sortList(list) {
  list.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  list.forEach((item) => employeesULElement.appendChild(item));
}

getEmployees(employeesList);
sortList(employeesList);
