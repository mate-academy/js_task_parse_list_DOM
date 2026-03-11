'use strict';

// write code here
const list = document.querySelector('ul');

function salaryToNumber(salaryStr) {
  return Number(salaryStr.replace('$', '').replace(/,/g, ''));
}

function sortList() {
  const listItems = [...list.querySelectorAll('li')];

  listItems.sort((a, b) => {
    return salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary);
  });

  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees() {
  const listItems = [...list.querySelectorAll('li')];

  return listItems.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: salaryToNumber(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

sortList(list);

getEmployees(list);
