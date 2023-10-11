'use strict';

const allEmployees = [...document.querySelectorAll('li')];

const getSalary = (el, attr) => {
  return el.getAttribute(attr)
    .slice(1)
    .split(',')
    .join('');
};

const attributeToGet = 'data-salary';

const sortedEmployeesBySalary = allEmployees.sort((employee1, employee2) => {
  const salary1 = getSalary(employee1, attributeToGet);
  const salary2 = getSalary(employee2, attributeToGet);

  return Number(salary2) - Number(salary1);
});

const list = document.querySelector('ul');

list.innerHTML = '';

sortedEmployeesBySalary.forEach(worker => list.appendChild(worker));

const getEmployee = () =>
  allEmployees.map(employee => ({
    name: employee.innerText,
    position: employee.getAttribute('data-position'),
    salary: employee.getAttribute('data-salary'),
    age: employee.getAttribute('data-age'),
  }));

getEmployee();
