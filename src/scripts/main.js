'use strict';

const list = document.querySelector('ul');
const items = [...list.querySelectorAll('li')];

function convertToNumber(salary) {
  return +salary.replace(/[$,]/g, '');
}

function sortList(property) {
  items.sort((a, b) => {
    const salaryA = convertToNumber(a.dataset[property]);
    const salaryB = convertToNumber(b.dataset[property]);

    return salaryB - salaryA;
  });

  list.innerHTML = '';
  items.forEach((li) => list.insertBefore(li, null));
}

function getEmployees() {
  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList('salary');
getEmployees();
