'use strict';

const allEmployers = [...document.querySelectorAll('li')];

const sortBySalaries = allEmployers.sort((a, b) => {
  const salaryA = a.getAttribute('data-salary').slice(1).split(',').join('');
  const salaryB = b.getAttribute('data-salary').slice(1).split(',').join('');

  return Number(salaryB) - Number(salaryA);
});

const list = document.querySelector('ul');

list.innerHTML = '';

sortBySalaries.forEach(worker => list.appendChild(worker));

const getEmployees = () => {
  return allEmployers.map(emp => {
    return {
      name: emp.innerText,
      position: emp.getAttribute('data-position'),
      salary: emp.getAttribute('data-salary'),
      age: emp.getAttribute('data-age'),
    };
  });
};

getEmployees();
