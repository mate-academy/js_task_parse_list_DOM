'use strict';

const ul = document.querySelector('ul');
const list = [...document.querySelectorAll('li')];

function getEmployees(li) {
  return li.map(el => {
    const obj = el.dataset;

    obj.name = el.textContent.trim();

    obj.salary = el.dataset.salary.slice(1).split(',').join('');

    return obj;
  }); ;
}

function sortList(sortsalary) {
  return sortsalary.sort((a, b) => (b.salary) - (a.salary));
}

const arrsort = sortList(getEmployees(list)).map(el => {
  return `<li
  data-position=${el.position}
  data-salary=$${el.salary}
  data-age=${el.age}
  >${el.name}
  </li>`;
});

ul.innerHTML = `${arrsort.join('')}`;
