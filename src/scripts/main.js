'use strict';

const list = document.querySelectorAll('li');

function sortList(elem) {
  const ul = document.querySelector('ul');

  const sortEl = [...elem].sort((a, b) => {
    const salaryA = a.getAttribute('data-salary');
    const salA = salaryA.replaceAll(/[, $]/g, '');
    const salaryB = b.getAttribute('data-salary');
    const salB = salaryB.replaceAll(/[, $]/g, '');

    return Number(salB) - Number(salA);
  });

  ul.innerHTML = '';

  sortEl.forEach((el) => {
    ul.appendChild(el);
  });
}

function getEmployees(elem) {
  return [...elem].map((el) => ({
    name: el.textContent.trim(),
    position: el.getAttribute('data-position'),
    salary: Number(el.getAttribute('data-salary').replaceAll(/[, $]/g, '')),
    age: Number(el.getAttribute('data-age')),
  }));
}
sortList(list);
getEmployees(list);
