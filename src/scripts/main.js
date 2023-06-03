'use strict';

const employees = document.querySelectorAll('li[data-salary]');

const employeeArray = [...employees].map(employee => {
  const salary = employee
    .getAttribute('data-salary')
    .replace(/[^\d.-]/g, '');

  return {
    element: employee, salary: parseInt(salary),
  };
});

employeeArray.sort((a, b) => b.salary - a.salary);

const ul = document.querySelector('ul');

ul.innerHTML = '';

employeeArray.forEach(employee => {
  ul.appendChild(employee.element);
});
