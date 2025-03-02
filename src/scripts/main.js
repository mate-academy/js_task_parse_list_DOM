'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelector('ul');
  const employees = Array.from(employeeList.children);

  function parseSalary(salary) {
    return Number(salary.replace(/[^0-9.-]+/g, ''));
  }

  function sortList(list) {
    const sortedList = [...list].sort((a, b) => {
      return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
    });

    employeeList.innerHTML = '';
    sortedList.forEach((item) => employeeList.appendChild(item));
  }

  function getEmployees(list) {
    return list.map((item) => ({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    }));
  }

  sortList(employees);
  getEmployees(employees);
});
