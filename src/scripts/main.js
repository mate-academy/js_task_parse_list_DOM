'use strict';

// write code here
function getSalaryValue(salaryStr) {
  if (!salaryStr) {
    return NaN;
  }

  let clean = salaryStr.replace(/[^0-9,.-]/g, '').trim();

  clean = clean.replace(/\s+/g, '');
  clean = clean.replace(/(?!^-)-/g, '');

  if (clean.indexOf(',') > -1 && clean.indexOf('.') > -1) {
    clean = clean.replace(/,/g, '');
  } else if (clean.indexOf(',') > -1) {
    clean = clean.replace(/,/g, '.');
  }

  return Number(clean);
}

function sortList(list) {
  if (!list) {
    return;
  }

  const items = Array.from(list.children);

  if (!items.every((i) => Number.isFinite(getSalaryValue(i.dataset.salary)))) {
    return;
  }

  items
    .sort(
      (a, b) =>
        getSalaryValue(b.dataset.salary) - getSalaryValue(a.dataset.salary),
    )
    .forEach((item) => list.appendChild(item));
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  if (!list) {
    return;
  }

  sortList(list);
});
