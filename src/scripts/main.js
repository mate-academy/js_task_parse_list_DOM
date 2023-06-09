'use strict';

const listItem = document.querySelector('ul');

function sortList(list) {
  Array.from(listItem.children)
    .sort((a, b) => {
      const salaryA = Number(a.dataset[list].replace(/[^0-9.-]+/g, ''));
      const salaryB = Number(b.dataset[list].replace(/[^0-9.-]+/g, ''));

      return salaryB - salaryA;
    })
    .forEach(item => {
      listItem.appendChild(item);
    });
}

function getEmployees(list) {
  return Array.from(listItem.children).map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset[list],
    age: item.dataset.age,
  }));
}

sortList('salary');

getEmployees('salary');
