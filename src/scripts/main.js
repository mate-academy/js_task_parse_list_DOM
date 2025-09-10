'use strict';

const listWrapper = document.getElementsByTagName('ul')[0];

function parseSalary(str) {
  return Number(str.trim().replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  // Re-append sorted items to the list
  items.forEach((el) => list.appendChild(el));
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));
  const employees = [];

  items.forEach((el) => {
    employees.push({
      name: el.dataset.name?.trim() || el.textContent.trim(),
      position: el.dataset.position,
      salary: parseSalary(el.dataset.salary),
      age: Number(el.dataset.age.trim()),
    });
  });

  return employees;
}

sortList(listWrapper);
getEmployees(listWrapper);
