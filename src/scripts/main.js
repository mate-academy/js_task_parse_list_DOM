'use strict';

function parseNum(salary) {
  const toNum = Number(salary.replace(/[$,]/g, ''));

  return toNum;
}

const emploees = Array.from(document.querySelectorAll('li'));

emploees.sort(
  (e1, e2) => parseNum(e2.dataset.salary) - parseNum(e1.dataset.salary),
);

emploees.forEach((li) => document.querySelector('ul').appendChild(li));
