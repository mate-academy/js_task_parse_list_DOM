'use strict';

// Helper: convert "$327,900" → 327900
function parseSalary(salaryString) {
  return Number(salaryString.replace(/\$|,/g, ''));
}

// Sort list items by salary (descending)
function sortList(ul) {
  const items = Array.from(ul.children);

  const sortedItems = items.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  sortedItems.forEach((item) => ul.appendChild(item));
}

// Create array of employee objects
function getEmployees(ul) {
  return Array.from(ul.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

// Run functions
const list = document.querySelector('ul');

sortList(list); // ← this updates your webpage visually
getEmployees(list); // ← this creates the array (you can use it later)
