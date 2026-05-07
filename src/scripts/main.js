'use strict';

const list = document.querySelector('ul');

const parseSalary = (salaryStr) => {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
};

function sortList(listElement) {
  const items = Array.from(listElement.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((li) => listElement.append(li));
}

function getEmployees(listElement) {
  const items = Array.from(listElement.children);

  return items.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

sortList(list);

getEmployees(list);
