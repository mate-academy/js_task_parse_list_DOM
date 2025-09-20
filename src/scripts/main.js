'use strict';

// write code here
function parseSalary(salaryStr) {
  if (!salaryStr) {
    return 0;
  }

  return Number(String(salaryStr).replace(/[$,]/g, '')) || 0;
}

function sortList(list) {
  if (!list) {
    return;
  }

  const items = Array.from(list.querySelectorAll('li')).map((node, index) => ({
    node,
    salary: parseSalary(node.dataset.salary),
    index,
  }));

  items.sort((a, b) => {
    if (b.salary !== a.salary) {
      return b.salary - a.salary;
    }

    return a.index - b.index;
  });

  items.forEach((item) => list.appendChild(item.node));
}

// return array of employees
function getEmployees(list) {
  if (!list) {
    return [];
  }

  return Array.from(list.querySelectorAll('li')).map((item) => {
    const employeeName =
      item.dataset.name ||
      item.querySelector('.name')?.textContent.trim() ||
      item.textContent.trim();

    const ageValue = item.dataset.age;
    const age = ageValue !== undefined ? Number(ageValue) || 0 : 0;

    return {
      name: employeeName,
      position: item.dataset.position || '',
      salary: parseSalary(item.dataset.salary),
      age,
    };
  });
}

// expose functions globally for tests
window.sortList = sortList;
window.getEmployees = getEmployees;

// run when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  sortList(list);

  const employees = getEmployees(list);

  // expose globally for testing/debug
  window.employees = employees;

  // console.table(employees);
});
