'use strict';

function sortList(employees) {
  const result = [...employees].sort((a, b) => {
    const salaryA = a.dataset.salary;
    const salaryB = b.dataset.salary;

    return formatSalary(salaryB) - formatSalary(salaryA);
  });

  return result;
}

function getEmployees(employees) {
  const result = [...employees].map(employee => ({
    name: employee.innerText.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));

  return result;
}

const list = document.querySelectorAll('li');
const sortedList = sortList(list);
const ulElem = document.querySelector('ul');

ulElem.innerHTML = `
  ${sortedList.map(employee => {
    return `
      <li 
        data-position='${employee.dataset.position}'
        data-salary='${employee.dataset.salary}'
        data-age='${employee.dataset.age}'>
          ${employee.innerText}
      </li>
    `;
  }).join('')}
`;

sortList(list);
getEmployees(list);

function formatSalary(salary) {
  return +salary.replace('$', '').replace(',', '');
}
