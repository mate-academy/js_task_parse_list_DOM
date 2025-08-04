'use strict';

document.addEventListener('DOMContentLoaded', () => {
  function parseSalary(salaryString) {
    return parseFloat(salaryString.replace(/[$,]/g, ''));
  }

  /**
   * @param {HTMLElement} list
   */
  function sortList(list) {
    const employees = Array.from(list.querySelectorAll('li'));

    employees.sort((a, b) => {
      const salaryA = parseSalary(a.dataset.salary);
      const salaryB = parseSalary(b.dataset.salary);

      return salaryB - salaryA;
    });

    employees.forEach((employee) => {
      list.appendChild(employee);
    });
  }

  /**
   * @param {HTMLElement} list
   * @returns {Array<object>}
   */
  function getEmployees(list) {
    const employees = Array.from(list.querySelectorAll('li'));

    return employees.map((employee) => {
      return {
        name: employee.textContent.trim(),
        position: employee.dataset.position,
        salary: parseSalary(employee.dataset.salary),
        age: parseInt(employee.dataset.age, 10),
      };
    });
  }

  const employeeList = document.querySelector('ul');

  sortList(employeeList);

  getEmployees(employeeList);
});
