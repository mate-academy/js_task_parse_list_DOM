'use strict';
// const employeesArray = employees.querySelectorAll('li');

const list = document.querySelector('ul');

function salaryToNumber(salary) {
  return Number(salary.slice(1).replace(',', ''));
}

function sortList(listElement) {
  const items = Array.from(listElement.querySelectorAll('li'));

  const sorted = items.sort((a, b) => {
    return salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary);
  });

  sorted.forEach((item) => listElement.appendChild(item));
}

sortList(list);

function getEmployees(listElement) {
  const array = listElement.querySelectorAll('li');
  const employeeArray = [];

  array.forEach((employee) => {
    const employeeObj = {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: salaryToNumber(employee.dataset.salary),
      age: parseInt(employee.dataset.age),
    };

    employeeArray.push(employeeObj);
  });

  return employeeArray;
}

getEmployees(list);
