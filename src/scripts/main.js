'use strict';

// Helper function: converts a salary string into a pure number
const parseSalary = (salaryStr) => {
  if (!salaryStr) {
    return 0;
  }

  // Remove all non-digit characters
  return parseInt(salaryStr.replace(/[^\d]/g, ''), 10);
};

// Function 1: Sorts list items in descending order based on salary dataset
function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA; // Descending order
  });

  // Append sorted items back to the list
  items.forEach((item) => {
    list.appendChild(item);
  });
}

// Function 2: Returns an array of employee objects mapped from the list items
function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => ({
    // Fallback to textContent if dataset.name is not provided
    name: item.dataset.name || item.textContent.trim(),
    position: item.dataset.position || null,
    salary: parseSalary(item.dataset.salary),
    age: parseInt(item.dataset.age, 10) || null,
  }));
}

// Find the list element in the document and execute the functions
const listElement = document.querySelector('ul');

if (listElement) {
  sortList(listElement);
  getEmployees(listElement);
}
