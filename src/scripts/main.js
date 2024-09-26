'use strict';

const list = document.querySelector('ul');
const items = [...list.querySelectorAll('li')];

function convertToNumber(salary) {
  return +salary.replace(/[$,]/g, '');
}

function sortList(property) {
  items.sort((a, b) => {
    const propA = convertToNumber(a.dataset[property]);
    const propB = convertToNumber(b.dataset[property]);

    return propB - propA;
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
