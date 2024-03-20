'use strict';
// Helper function to convert salary from string to number

function convertSalaryToNumber(salary) {
  return parseFloat(salary.replace('$', '').replace(',', ''));
}

// Function to sort the employee list by salary in descending order
function sortEmployeesBySalary() {
  const employeeList = document.querySelectorAll('ul li');

  const sortedEmployees = [...employeeList].sort((a, b) => {
    const salaryA = convertSalaryToNumber(a.getAttribute('data-salary'));
    const salaryB = convertSalaryToNumber(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  const ulElement = document.querySelector('ul');

  ulElement.innerHTML = ''; // Clear the existing list items

  sortedEmployees.forEach(employee => {
    ulElement.appendChild(employee);
  });
}

sortEmployeesBySalary();
