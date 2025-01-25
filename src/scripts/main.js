'use strict';

const list = document.querySelector('ul');

function sortList(li) {
  array.forEach((item) => li.append(item));
}

function getEmployees(li) {
  const items = [...li.querySelectorAll('li')];

  items.sort((item1, item2) => {
    const firstSalary = +item1.dataset.salary.slice(1).split(',').join('');

    const secondSalary = +item2.dataset.salary.slice(1).split(',').join('');

    return secondSalary - firstSalary;
  });

  return items;
}

const array = getEmployees(list);

sortList(list);
