'use strict';

// write code here

function salaryToNumber(salaryStr) {
  return Number(salaryStr.replace('$', '').replace(/,/g, ''));
}

function sortList(list) {
  const listItems = [...list.querySelectorAll('li')];

  listItems.sort((a, b) => {
    return salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary);
  });

  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const listItems = [...list.querySelectorAll('li')];

  return listItems.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: salaryToNumber(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

const itemList = document.querySelector('ul');

sortList(itemList);

getEmployees(itemList);
