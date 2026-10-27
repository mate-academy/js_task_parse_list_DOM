'use strict';

const list = document.querySelector('ul');

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

function sortList(listElement) {
  const items = Array.from(listElement.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => listElement.appendChild(item));
}

function getEmployees(listElement) {
  const items = listElement.querySelectorAll('li');

  return Array.from(items).map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortList(list);

getEmployees(list);
