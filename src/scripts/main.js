'use strict';

const ul = document.querySelector('ul');

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  const getSalary = (li) => {
    return Number(li.dataset.salary.replace(/[$,]/g, ''));
  };

  items.sort((a, b) => getSalary(b) - getSalary(a));

  list.replaceChildren(...items);
}

function getEmployees(list) {
  const items = [...list.querySelectorAll('li')];

  return items.map((li) => {
    return {
      position: li.dataset.position,
      salary: Number(li.dataset.salary.replace(/[$,]/g, '')),
      name: li.textContent.trim(),
      age: Number(li.dataset.age),
    };
  });
}

sortList(ul);
getEmployees(ul);
