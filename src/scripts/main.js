'use strict';

// Helper to convert salary string to number
const parseSalary = (salaryStr) => Number(salaryStr);

// Sort list items by salary descending
const sortList = (list) => {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((item) => list.appendChild(item));
};

// Get array of employee objects
const getEmployees = (list) => {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((item) => ({
    name: item.dataset.name || '',
    position: item.dataset.position || '',
    salary: parseSalary(item.dataset.salary || '0'),
    age: Number(item.dataset.age || 0),
  }));
};

// Main execution
document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('employees');

  if (!list) {
    return;
  }

  sortList(list);

  const employees = getEmployees(list);

  // eslint-disable-next-line no-console
  console.log(employees);
});
