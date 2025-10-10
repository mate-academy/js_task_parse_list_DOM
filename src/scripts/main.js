'use strict';

const allList = document.querySelector('ul');

function sortList(list) {
  function getSalary(li) {
    return +li.dataset.salary;
  }

  const items = Array.from(list.children);
  const itemsArray = Array.from(items);
  const newSalary = itemsArray.sort((a, b) => getSalary(b) - getSalary(a));

  newSalary.forEach((li) => list.appendChild(li));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  const newEmployees = items.map((li) => ({
    name: li.dataset.name,
    position: li.dataset.position,
    salary: +li.dataset.salary,
    age: +li.dataset.age,
  }));

  return newEmployees;
}

sortList(allList);

getEmployees(allList);
