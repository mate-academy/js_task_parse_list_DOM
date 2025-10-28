'use strict';

const employeeList = document.querySelector('ul');

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  items.forEach((li) => list.appendChild(li));
}

function getEmployees(list) {
  const items = [...list.querySelectorAll('li')];

  return items.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: Number(li.dataset.salary.replace(/[$,]/g, '')),
    age: Number(li.dataset.age),
  }));
}

sortList(employeeList);

getEmployees(employeeList);
