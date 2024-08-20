'use strict';

const nrmzSal = (str) => +str.replace(/[$,]/g, '');

const sortList = (list) => {
  return list.sort(
    (a, b) => nrmzSal(b.dataset.salary) - nrmzSal(a.dataset.salary),
  );
};

const getEmployees = (list) => {
  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  list.forEach((li) => ul.appendChild(li));
};

const allElementsOfList = Array.from(document.querySelector('ul').children);

getEmployees(sortList(allElementsOfList));
