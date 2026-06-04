'use strict';

const list = document.querySelector('ul');

function getSalary(item) {
  return Number(item.dataset.salary.replaceAll(',', '').replace('$', ''));
}

function sortList(ul) {
  const items = [...ul.children];

  items.sort((a, b) => {
    return getSalary(b) - getSalary(a);
  });
  ul.append(...items);
}

function getEmployees(ul) {
  const items = [...ul.children];
  const employers = [];

  items.forEach((item) => {
    employers.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: getSalary(item),
      age: Number(item.dataset.age),
    });
  });

  return employers;
}
sortList(list);
getEmployees(list);
