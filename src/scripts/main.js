'use strict';

const parseList = document.querySelector('body > ul');

function salaryToNumber(salary) {
  return Number(salary.replace(',', '').replace('$', ''));
}

// sort
function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = salaryToNumber(a.dataset.salary);
    const salaryB = salaryToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  if (list) {
    list.innerHTML = '';
  }

  items.forEach(item => list.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  const newObj = items.map(item => {
    const nameName = item.textContent.trim();
    const { position, salary, age } = item.dataset;

    return {
      name: nameName, position, salary, age,
    };
  });

  return newObj;
}

sortList(parseList);
getEmployees(parseList);
