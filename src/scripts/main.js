'use strict';

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.querySelectorAll('li')).map((item) => {
    return {
      name: item.dataset.name,
      salary: parseSalary(item.dataset.salary),
      position: item.dataset.position,
      age: Number(item.dataset.age),
    };
  });
}

const listElement = document.querySelector('ul');

sortList(listElement);

getEmployees(listElement);
