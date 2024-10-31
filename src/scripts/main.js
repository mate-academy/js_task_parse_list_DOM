'use strict';

// write code here
'use strict';

const salaryList = [...document.querySelectorAll('li')];

function parseSalary(salaryStr) {
  return parseInt(salaryStr.replace(/[$,]/g, ''), 10);
}

function getEmployees(list) {
  return list.map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: parseSalary(item.getAttribute('data-salary')),
    age: parseInt(item.getAttribute('data-age'), 10),
  }));
}

function sortList(employees) {
  return employees.sort((a, b) => b.salary - a.salary);
}

const employe = getEmployees(salaryList);
const sortedEmployees = sortList(employe);
const ul = document.querySelector('ul');

ul.innerHTML = '';

sortedEmployees.forEach((employee) => {
  const li = document.createElement('li');

  li.textContent = `${employee.name}`;
  li.setAttribute('data-position', employee.position);
  li.setAttribute('data-salary', `$${employee.salary.toLocaleString()}`);
  li.setAttribute('data-age', employee.age);
  ul.appendChild(li);
});
