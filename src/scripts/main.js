'use strict';

const listOrigin = document.querySelector('ul');

function convertor(salary) {
  return Number(salary.replace(/\D+/g, ''));
}

function sortList(list) {
  if (!list) {
    return;
  }

  const items = [...list.querySelectorAll('li')];

  items.sort((a, b) => {
    return convertor(b.dataset.salary) - convertor(a.dataset.salary);
  });
  list.append(...items);
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((item) => {
    return {
      name: item.dataset.name,
      position: item.dataset.position,
      salary: convertor(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

sortList(listOrigin);
getEmployees(listOrigin);
