'use strict';

const listElement = document.querySelector('ul');
const li = listElement;

function parseSalary(salaryString) {
  if (!salaryString) {
    return 0;
  }

  const cleanedSalary = salaryString.trim().replace(/[^\d.-]/g, '');

  return +cleanedSalary;
}

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = [...list.querySelectorAll('li')];

  return items.map((item) => {
    const raw = item.textContent;
    const position = item.dataset.position;
    const salary = parseSalary(item.dataset.salary);
    const age = +item.dataset.age;

    return {
      name: raw.trim(),
      position,
      salary,
      age,
    };
  });
}

sortList(li);

getEmployees(li);
