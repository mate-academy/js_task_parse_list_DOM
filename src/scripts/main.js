'use strict';

const list = document.querySelectorAll('li');

const sortList = (li) => {
  const sorted = [...li].sort((a, b) =>
    +b.dataset.salary.replace(/[,$]/g, '')
    - +a.dataset.salary.replace(/[,$]/g, ''));

  const ul = document.querySelector('ul');

  for (let i = 0; i < sorted.length; ++i) {
    ul.appendChild(sorted[i]);
  }

  return sorted;
};

const getEmployees = (li) => {
  const result = [...li].map(x => x.dataset);

  return result;
};

sortList(list);
getEmployees(list);
