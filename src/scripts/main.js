/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

function liCompare(a, b) {
  const aSalary = parseFloat(a.getAttribute('data-salary').replace(/\$|,/g, ''));
  const bSalary = parseFloat(b.getAttribute('data-salary').replace(/\$|,/g, ''));

  return bSalary - aSalary;
};

const root = document.getElementsByTagName('ul');

const elements = [...root[0].getElementsByTagName('li')];

elements.sort(liCompare);

root[0].append(...elements);
