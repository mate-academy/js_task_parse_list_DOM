'use strict';

const allList = document.querySelector('ul');

function sortList(list) {
  function getSalary(li) {
    return Number(li.dataset.salary.replace(/[$,]/g, '').trim());
  }

  const itemsArray = Array.from(list.children);
  const newSalary = itemsArray.sort((a, b) => getSalary(b) - getSalary(a));

  newSalary.forEach((li) => list.appendChild(li));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  const newEmployees = items.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: Number(li.dataset.salary.replace(/,/g, '').trim()),
    age: +li.dataset.age,
  }));

  return newEmployees;
}

sortList(allList);

getEmployees(allList);
