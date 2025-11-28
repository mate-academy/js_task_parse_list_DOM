'use strict';

function salaryToNum(value) {
  return Number(value.replace('$', '').replace(/,/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);
  const sorted = items.sort((a, b) => {
    const sortedA = salaryToNum(a.dataset.salary);
    const sortedB = salaryToNum(b.dataset.salary);

    return sortedB - sortedA;
  });

  sorted.forEach((item) => list.appendChild(item));
}

const parse = document.querySelector('ul');

sortList(parse);

function getEmployees(person) {
  const employees = Array.from(person.children);
  const res = employees.map((a) => ({
    name: a.textContent.trim(),
    position: a.dataset.position,
    salary: a.dataset.salary,
    age: a.dataset.age,
  }));

  return res;
}

getEmployees(parse);
