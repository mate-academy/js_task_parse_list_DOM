'use strict';

const employeeList = document.querySelector('ul');

function sortList(list) {
  const li = [...list.querySelectorAll('li')];

  li.sort((a, b) => {
    const salaryA = toNumber(a.dataset.salary);
    const salaryB = toNumber(b.dataset.salary);

    return salaryB - salaryA;
  });
  list.append(...li);
}

function getEmployees(list) {
  return [...list.querySelectorAll('li')].map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: toNumber(li.dataset.salary),
    age: parseInt(li.dataset.age, 10),
  }));
}

function toNumber(str) {
  return parseFloat(str.replace(/[^\d.]/g, ''));
}

sortList(employeeList);
getEmployees(employeeList);
