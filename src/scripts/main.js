'use strict';

// write code here
function parseSalary(string) {
  return Number(string.replace(/[^\d.]/g, ''));
}

// const list = document.querySelector('ul');

function sortList(listElem) {
  const itemsArray = [...listElem.querySelectorAll('li')];

  itemsArray.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });
  listElem.append(...itemsArray);
}

function getEmployees(listElem) {
  const itemsArray = [...listElem.querySelectorAll('li')];

  return itemsArray.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  if (!list) {
    return;
  }
  sortList(list);

  const employees = getEmployees(list);

  // eslint-disable-next-line no-console
  console.log(employees);
});
