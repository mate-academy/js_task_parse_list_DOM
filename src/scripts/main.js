'use strict';

const ul = document.querySelector('ul');
const items = [...ul.querySelectorAll('li')];

function sortList () {

  const getSalary = (li) => {
    return Number(li.dataset.salary.replace(/[$,]/g, ''));
  };

  items.sort((a, b) => getSalary(a) + getSalary(b));
}

function getEmployees () {
  ul.replaceChildren(...items);
}
