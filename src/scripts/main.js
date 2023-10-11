'use strict';

const allEmployees = [...document.querySelectorAll('li')];

const getSalary = (el, attr) => {
  return el.getAttribute(attr)
    .slice(1)
    .split(',')
    .join('');
};

const attributeToGet = 'data-salary';

const sortedEmployeesBySalary = allEmployees.sort((emploee1, emploee2) => {
  const salary1 = getSalary(emploee1, attributeToGet);
  const salary2 = getSalary(emploee2, attributeToGet);

  return Number(salary2) - Number(salary1);
});

const list = document.querySelector('ul');

list.innerHTML = '';

sortedEmployeesBySalary.forEach(worker => list.appendChild(worker));

const getEmployee = () =>
  allEmployees.map(emp => ({
    name: emp.innerText,
    position: emp.getAttribute('data-position'),
    salary: emp.getAttribute('data-salary'),
    age: emp.getAttribute('data-age'),
  }));

getEmployee();
