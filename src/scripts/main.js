'use strict';

function sortEmployeesBySalary() {
  const employeeItems = document.querySelectorAll('li');

  const sortedItems = Array.from(employeeItems).sort((a, b) => {
    const salaryA = parseFloat(
      a.getAttribute('data-salary').replace('$', '').replace(',', ''),
    );
    const salaryB = parseFloat(
      b.getAttribute('data-salary').replace('$', '').replace(',', ''),
    );

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  sortedItems.forEach((item) => ul.appendChild(item));
}

function getEmployeesArray() {
  const employeeItems = document.querySelectorAll('li');
  const employees = Array.from(employeeItems).map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: item.getAttribute('data-salary'),
      age: item.getAttribute('data-age'),
    };
  });

  return employees;
}

sortEmployeesBySalary();
getEmployeesArray();
