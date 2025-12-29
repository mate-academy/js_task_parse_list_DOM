'use strict';

// Get the list from the document
const employeeList = document.querySelector("ul");

// Helper function: convert salary string to number
function parseSalary(salaryStr) {
  // Remove $ and commas, then convert to number
  return Number(salaryStr.replace(/[$,]/g, ""));
}

// Function to sort list items by salary in descending order
function sortList(list) {
  const items = Array.from(list.querySelectorAll("li"));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);
    return salaryB - salaryA; // descending order
  });

  // Append sorted items back to the list
  items.forEach(item => list.appendChild(item));
}

// Function to get employees as array of objects
function getEmployees(list) {
  const items = Array.from(list.querySelectorAll("li"));
  return items.map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age)
  }));
}

// Call both functions
sortList(employeeList);
const employeesArray = getEmployees(employeeList);

console.log(employeesArray);

