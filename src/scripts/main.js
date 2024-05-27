'use strict';

function toNumber(item) {
  return +item.slice(1).replaceAll(',', '');
}

function sortList(list) {
  const items = [...list.children].sort(
    (item1, item2) =>
      toNumber(item2.dataset.salary) - toNumber(item1.dataset.salary),
  );

  items.forEach((item) => list.append(item));
}

const getEmployees = (list) => {
  return [...list.children].map((item) => ({
    name: item.innerHTML,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
};

const subject = document.querySelector('ul');

sortList(subject);
getEmployees(subject);
