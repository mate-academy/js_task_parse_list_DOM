'use strict';

const list = document.querySelector('ul');

function salaryToNumber(salary) {
  return Number(salary.replace('$', '').replace(',', ''));
}

function sortList(listElement) {
  const items = [...listElement.children];

  items.sort((a, b) => {
    return salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary);
  });

  listElement.append(...items);
}

sortList(list);
