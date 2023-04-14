'use strict';

const employees = document.querySelector('.employess');
const employeesArray = [...employees.children];

employeesArray.forEach(item => {
  const num = Number(item.getAttribute('data-salary').replace(/[$,]/g, ''));

  item.setAttribute('data-salary', num);
});

employeesArray.sort((a, b) =>
  b.getAttribute('data-salary')
  - a.getAttribute('data-salary')
);

employees.innerHTML = '';

employeesArray.forEach(employee => {
  const liElement = document.createElement('li');

  liElement.setAttribute(
    'data-position',
    employee.getAttribute('data-position')
  );

  liElement.setAttribute(
    'data-salary',
    employee.getAttribute('data-salary')
  );

  liElement.setAttribute(
    'data-age',
    employee.getAttribute('data-age')
  );

  liElement.innerText = employee.innerText.trim();

  employees.appendChild(liElement);
});
