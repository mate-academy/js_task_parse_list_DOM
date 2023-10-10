'use strict';

const allEmployers = [...document.querySelectorAll('li')];

const getSalary = (el, attr) => {
  return el.getAttribute(attr)
    .slice(1)
    .split(',')
    .join('');
};

const attributeToGet = 'data-salary';

const sortBySalaries = allEmployers.sort((a, b) => {
  const salaryA = getSalary(a, attributeToGet);
  const salaryB = getSalary(b, attributeToGet);

  return Number(salaryB) - Number(salaryA);
});

const list = document.querySelector('ul');

list.innerHTML = '';

sortBySalaries.forEach(worker => list.appendChild(worker));

const getEmployees = () =>
  allEmployers.map(emp => ({
    name: emp.innerText,
    position: emp.getAttribute('data-position'),
    salary: emp.getAttribute('data-salary'),
    age: emp.getAttribute('data-age'),
  }));

getEmployees();
