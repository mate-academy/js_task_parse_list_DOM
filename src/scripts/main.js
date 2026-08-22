'use strict';

const elemList = document.querySelector('ul');

function parseSalary(salaryString) {
  return Number(salaryString.replaceAll('$', '').replaceAll(',', ''));
}

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((a, b) => {
    const salaryA = a.dataset.salary;
    const salaryB = b.dataset.salary;

    const numA = parseSalary(salaryA);
    const numB = parseSalary(salaryB);

    return numB - numA;
  });

  list.append(...items);
}

sortList(elemList);

function getEmployees(list) {
  const items = [...list.querySelectorAll('li')];

  return items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

getEmployees(elemList);
