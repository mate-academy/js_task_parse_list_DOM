'use strict';

const ul = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => {
    const dataSalaryA = +a.dataset.salary.replace('$', '').replaceAll(',', '');
    const dataSalaryB = +b.dataset.salary.replace('$', '').replaceAll(',', '');

    return dataSalaryB - dataSalaryA;
  });

  list.forEach((item) => {
    ul.appendChild(item);
  });
}

sortList(Array.from(ul.children));

function getEmployees(list) {
  const employees = [];

  list.forEach((worker) => {
    const fullName = worker.textContent;
    const position = worker.dataset.position;
    const salary = worker.dataset.salary;
    const age = worker.dataset.age;

    employees.push({
      name: fullName.trim(),
      position,
      salary,
      age,
    });
  });

  return employees;
}

// eslint-disable-next-line no-console
console.log(getEmployees(Array.from(ul.children)));
