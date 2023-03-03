'use strict';

const ullist = document.querySelector('ul');

function sortList(list) {
  const items = Array.from(list.children);
  const sortable = items.map((item) => ({
    element: item,
    salary: convertToNumber(item.dataset.salary),
  }));

  sortable.sort((a, b) => b.salary - a.salary);

  sortable.forEach(({ element }) => ullist.appendChild(element));
}

function convertToNumber(salaryString) {
  return parseFloat(salaryString.replace(/\$/g, ''));
}

sortList(ullist);
