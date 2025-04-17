'use strict';

const listCollection = document.getElementsByTagName('li');
const listItems = Array.from(listCollection);

const sortList = (list) => {
  const sortedList = [...list].sort((a, b) => {
    const salaryA = +a.dataset.salary.replace(/[^0-9.-]+/g, '');
    const salaryB = +b.dataset.salary.replace(/[^0-9.-]+/g, '');

    return salaryB - salaryA;
  });

  return sortedList;
};

const ul = document.getElementsByTagName('ul')[0];

ul.innerHTML = '';

const result = sortList(listItems);

result.forEach((item) => ul.appendChild(item));
