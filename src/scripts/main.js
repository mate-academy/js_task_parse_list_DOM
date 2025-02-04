'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const employeeList = document.querySelectorAll('ul > li');

  function convertSalary(salary) {
    return parseInt(salary.replace(/[^0-9.-]+/g, ''), 10);
  }

  function sortList(list) {
    if (!list || list.length === 0) {
      return;
    }

    const sortedList = Array.from(list).sort((a, b) => {
      const salaryA = convertSalary(a.dataset.salary);
      const salaryB = convertSalary(b.dataset.salary);

      return salaryB - salaryA;
    });

    const parentList = list[0].parentElement;

    sortedList.forEach((item) => parentList.appendChild(item));
  }

  function getEmployees(list) {
    if (!list || list.length === 0) {
      return [];
    }

    return Array.from(list).map((item) => ({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: convertSalary(item.dataset.salary),
      age: parseInt(item.dataset.age, 10),
    }));
  }

  sortList(employeeList);

  const employees = getEmployees(employeeList);

  // eslint-disable-next-line no-console
  console.log(employees);
});
