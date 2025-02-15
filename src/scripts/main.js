'use strict';

function parseSalary(salaryStr) {
  if (!salaryStr) {
    return 0;
  }

  return parseInt(salaryStr.replace(/[$,]/g, ''), 10);
}

function getEmployees(list) {
  const employeeElements = list.querySelectorAll('li');
  const employees = [];

  employeeElements.forEach((element) => {
    const salary = parseSalary(element.getAttribute('data-salary'));

    if (!isNaN(salary)) {
      const employee = {
        name: element.textContent.trim(),
        position: element.getAttribute('data-position'),
        salary: salary,
        age: parseInt(element.getAttribute('data-age'), 10),
      };

      employees.push(employee);
    }
  });

  return employees;
}

function sortEmployeesBySalary(list) {
  const employees = getEmployees(list);

  employees.sort((a, b) => b.salary - a.salary);

  list.innerHTML = '';

  employees.forEach((employee) => {
    const listItem = document.createElement('li');

    listItem.textContent = `${employee.name}`;
    listItem.setAttribute('data-position', employee.position);
    listItem.setAttribute('data-salary', employee.salary);
    listItem.setAttribute('data-age', employee.age);

    list.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const employeeList = document.querySelector('ul');

  sortEmployeesBySalary(employeeList);
});
