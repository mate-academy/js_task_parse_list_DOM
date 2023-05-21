'use strict';

function convertSalaryToNumber(salary) {
  return Number(salary.replace(/[^0-9.-]+/g, ''));
}

function sortList(listEl) {
  const listItems = Array.from(listEl.children);

  listItems.sort((a, b) => {
    const salaryA = convertSalaryToNumber(a.dataset.salary);
    const salaryB = convertSalaryToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });
  listEl.innerHTML = '';
  listItems.forEach(item => listEl.appendChild(item));
}

function getEmployees(listEl) {
  return Array.from(listEl.children).map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

const ul = document.querySelector('ul');

sortList(ul);

const employees = getEmployees(ul);
