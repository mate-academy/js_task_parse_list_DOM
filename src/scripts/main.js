'use strict';

const list = document.querySelector('ul');

const sortList = (listElement) => {
  const items = [...listElement.querySelectorAll('li')];

  items.sort((a, b) => {
    const salA = +a.dataset.salary.replace(/\D/g, '');
    const salB = +b.dataset.salary.replace(/\D/g, '');

    return salB - salA;
  });

  return items;
};

const getEmployees = (listElement, sortedItems) => {
  sortedItems.forEach((li) => {
    listElement.appendChild(li);
  });
};

const sortedElements = sortList(list);

getEmployees(list, sortedElements);
