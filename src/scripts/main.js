'use strict';

// write code here
function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));

  return list;
}

function getEmployees(list, sorted = false) {
  const employees = Array.from(list.querySelectorAll('li')).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));

  if (sorted) {
    return employees.sort((a, b) => b.salary - a.salary);
  }

  return employees;
}

const ul = document.querySelector('ul');

const el = sortList(ul);

getEmployees(el, true);
