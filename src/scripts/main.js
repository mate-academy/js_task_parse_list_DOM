'use strict';

const listFromDocument = document.querySelector('ul');

function convert(salary) {
  return parseInt(salary.replace('$', '').replace(',', ''));
}

function sortList(list) {
  const listItems = Array.from(list.children).sort(
    (a, b) => convert(b.dataset.salary) - convert(a.dataset.salary),
  );

  list.innerHTML = '';
  listItems.forEach((element) => list.appendChild(element));
}

function getEmployees(list) {
  const employees = [];

  const listItems = Array.from(list.children);

  for (const item of listItems) {
    employees.push({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  }

  return employees;
}

sortList(listFromDocument);
getEmployees(listFromDocument);
