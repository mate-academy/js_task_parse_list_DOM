'use strict';

const list = document.querySelector('ul');

const sortList = (array) => {
  const items = [...array.children].sort(
    (a, b) =>
      b.dataset.salary.replace(',', '').replace('$', '') -
      a.dataset.salary.replace(',', '').replace('$', ''),
  );

  items.forEach((item) => list.appendChild(item));
};

const getEmployees = (array) =>
  [...array.children].map(({ innerText, dataset }) => ({
    name: innerText,
    ...dataset,
  }));

sortList(list);

getEmployees(list);
