'use strict';

function parseSalary(salaryString) {
  return parseInt(salaryString.replace(/[^0-9.-]+/g, ''), 10);
}

// Function to get list of employees as an array of objects
function getEmployees(list) {
  const employees = [];

  // Loop through each list item (<li>)
  list.forEach((item) => {
    const names = item.textContent.trim();
    const position = item.getAttribute('data-position');
    const salary = item.getAttribute('data-salary');
    const age = item.getAttribute('data-age');

    employees.push({
      names,
      position,
      salary: parseSalary(salary), // Convert salary to a number
      salaryFormatted: salary, // Keep formatted salary string for display
      age,
    });
  });

  return employees;
}

// Function to sort the list items based on salary in descending order
function sortList(list) {
  // Get the list of employees (array of objects)
  const employees = getEmployees(list);

  // Sort the employees array by salary in descending order
  employees.sort((a, b) => b.salary - a.salary); // Sorting in descending order

  // Clear the list and append the sorted items
  const ul = document.getElementById('employee-list');

  ul.innerHTML = '';

  employees.forEach((employee) => {
    const li = document.createElement('li');

    li.setAttribute('data-position', employee.position);
    li.setAttribute('data-salary', employee.salaryFormatted);
    li.setAttribute('data-age', employee.age);
    li.textContent = employee.names;
    ul.appendChild(li);
  });
}

const employeeList = document.querySelectorAll('#employee-list li');

sortList(employeeList);
