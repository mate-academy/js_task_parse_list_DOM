'use strict';

// Helper function to convert salary from data attribute to a number
function getSalaryFromElement(element) {
  return Number(element.dataset.salary);
}

// Function to sort the list by salary (descending)
function sortList(list) {
  // Convert list to an array and sort it
  const items = Array.from(list.children);

  items.sort((a, b) => getSalaryFromElement(b) - getSalaryFromElement(a));

  // Remove all existing items in the list
  list.innerHTML = '';

  // Append sorted items back to the list
  items.forEach((item) => list.appendChild(item));
}

// Function to get employees array from the list
function getEmployees(list) {
  return Array.from(list.children).map((item) => {
    return {
      name: item.dataset.name,
      position: item.dataset.position,
      salary: Number(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

// Find the list element
const employeeList = document.querySelector('#employee-list');

// Call the functions
sortList(employeeList);

getEmployees(employeeList);
