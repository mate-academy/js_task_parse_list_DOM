'use strict';

const allList = document.querySelector('ul');
const getSalary = (li) => Number(li.dataset.salary.replace(/[^0-9.-]+/g, ''));

function sortList(listEl) {
  const items = Array.from(listEl.querySelectorAll('li'));

  items.sort((a, b) => getSalary(b) - getSalary(a));
  items.forEach((item) => listEl.appendChild(item));
}

function getEmployees(listEl) {
  return Array.from(listEl.querySelectorAll('li')).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position.trim(),
    salary: getSalary(li),
    age: Number(li.dataset.age.trim()),
  }));
}
sortList(allList);
getEmployees(allList);
