'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('ul');

  sortList(ul);
  getEmployees(ul);
});

function sortList(list) {
  const selector = Array.from(list.querySelectorAll('li'));

  const sortSalary = selector.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';
  sortSalary.forEach((item) => list.append(item));
}

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

function getEmployees(list) {
  const selector = Array.from(list.querySelectorAll('li'));

  return selector.map((li) => ({
    name: li.textContent.trim(),
  }));
}
