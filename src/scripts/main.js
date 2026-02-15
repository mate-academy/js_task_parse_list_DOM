'use strict';

function parseSalary(element) {
  const str = element.dataset.salary || '0';
  const noDollar = str.replace('$', '');
  const cleanedStr = noDollar.split(',').join('');

  return Number(cleanedStr);
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => parseSalary(b) - parseSalary(a));
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => {
    const nameEl = item.querySelector('.name').textContent.trim();
    const positionEl = item.querySelector('.position').textContent.trim();
    const salaryEl = parseSalary(item);
    const ageEl = Number(item.querySelector('.age').textContent.trim());

    return {
      name: nameEl,
      position: positionEl,
      salary: salaryEl,
      age: ageEl,
    };
  });
}

const employeesList = document.querySelector('ul');

sortList(employeesList);

getEmployees(employeesList);
