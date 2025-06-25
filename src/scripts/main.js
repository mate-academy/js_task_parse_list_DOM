'use strict';

const list = document.querySelector('ul');

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

function sortList() {
  const arrayList = Array.from(list.children);

  arrayList.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  arrayList.forEach((value) => list.appendChild(value));
}

sortList();
