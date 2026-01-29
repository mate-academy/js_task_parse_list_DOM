'use strict';

function salaryToNumber(salaryStr) {
  return Number(String(salaryStr).replace(/[$,]/g, ''));
}

function sortList(l) {
  const items = Array.from(l.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = salaryToNumber(a.dataset.salary);
    const salaryB = salaryToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  l.innerHTML = '';
  l.append(...items);
}

function getEmployees(l) {
  const items = Array.from(l.querySelectorAll('li'));

  return items.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: salaryToNumber(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
