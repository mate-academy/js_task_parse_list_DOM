'use strict';

const ullist = document.querySelector('ul');
const list = document.querySelectorAll('li');

function sortList(el) {
  const arrlist = [...el].sort((a, b) => (
    +b.dataset.salary.slice(1).split(',').join(''))
    - (+a.dataset.salary.slice(1).split(',').join('')));

  ullist.append(...arrlist);

  return arrlist;
}

function getEmployees(el) {
  const arrlistobj = sortList(el).map(item => {
    item.dataset.name = item.outerText;

    return item.dataset;
  });

  return arrlistobj;
}
sortList(list);
getEmployees(list);
