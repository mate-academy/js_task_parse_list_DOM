'use strict';

function sortList(list) {
  const listItems = [...list.querySelectorAll('li')];

  listItems.sort((a, b) => {
    const salaryA = parseInt(a.dataset.salary.replace(/[^0-9]/g, ''), 10);
    const salaryB = parseInt(b.dataset.salary.replace(/[^0-9]/g, ''), 10);

    return salaryB - salaryA;
  });

  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const array = [];

  list.querySelectorAll('li').forEach((li) => {
    const employee = {
      name: li.innerText,
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    };

    array.push(employee);
  });

  return array;
}

const ul = document.querySelector('ul');

sortList(ul);

getEmployees(ul);
