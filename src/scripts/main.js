'use strict';

const list = document.querySelector('ul');

function parseSalary(money) {
  return Number(money.replace(/[$,]/g, ''));
}

function sortList() {
  const arrayList = Array.from(list.children);

  arrayList.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  arrayList.forEach((value) => list.appendChild(value));
}

sortList();

function getEmployees() {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    salary: parseSalary(item.dataset.salary),
  }));
}

getEmployees();
