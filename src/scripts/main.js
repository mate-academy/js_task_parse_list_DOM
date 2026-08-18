'use strict';

const list = document.querySelector('ul');

function getSalary(item) {
  return Number(item.dataset.salary.replace('$', '').replace(',', ''));
}

function sortList(ul) {
  const items = [...ul.querySelectorAll('li')];

  items.sort((a, b) => {
    return getSalary(b) - getSalary(a);
  });

  ul.append(...items);
}

function getEmployees(ul) {
  const items = [...ul.querySelectorAll('li')];

  return items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: getSalary(item),
      age: Number(item.dataset.age),
    };
  });
}

sortList(list);
getEmployees(list);
