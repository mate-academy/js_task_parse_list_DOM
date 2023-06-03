'use strict';

const nodeList = document.querySelectorAll('li[data-salary]');

function createEmployeeArray(employees) {
  const employeeArray = [...employees].map(employee => {
    const salary = employee
      .getAttribute('data-salary')
      .replace(/[^\d.-]/g, '');

    const empName = employee.textContent.trim();
    const position = employee.getAttribute('data-position');
    const age = employee.getAttribute('data-age');

    return {
      element: employee,
      empName,
      position,
      salary: parseInt(salary),
      age,
    };
  });

  return employeeArray;
}

createEmployeeArray(nodeList);
console.log(createEmployeeArray(nodeList));

function sortUpdateDom(arr) {
  arr.sort((a, b) => b.salary - a.salary);

  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  arr.forEach(employee => {
    ul.appendChild(employee.element);
  });
}

sortUpdateDom(createEmployeeArray(nodeList));
