'use strict';

// 1. Get the list element
const ul = document.querySelector('ul');

// 2. Helper function to convert salary string to number
function parseSalary(salaryStr) {
  return +salaryStr.replace(/[$,]/g, '');
}

// 3. Function to sort list items by salary
function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  // Remove all children from the list
  // ul.innerHTML = '';

  // // Append sorted items back to the list
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const employees = Array.from(list.children);

  return employees.map((employee) => {
    return {
      name: employee.textContent,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(ul);
getEmployees(ul);
