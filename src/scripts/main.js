'use strict';

// write code here
// Helper function to convert salary to number
function getSalary(element) {
  return Number(element.dataset.salary);
}

// Function to sort list by salary in descending order
// eslint-disable-next-line no-shadow
function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => getSalary(b) - getSalary(a));
  items.forEach((item) => list.appendChild(item));
}

// Function to get an array of employee objects
// eslint-disable-next-line no-shadow
function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: getSalary(item),
    age: item.dataset.age,
  }));
}

// Get the list element from the document
const list = document.querySelector('#employee-list');

// Call the functions
sortList(list);

const employees = getEmployees(list);

// Display employees in the DOM or use it in another function
// Example: Display employee names in a list
const employeeNames = employees.map((employee) => employee.name).join(', ');

document.querySelector('#employee-names').textContent = employeeNames;
