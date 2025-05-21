'use strict';

const listEmpl = document.querySelectorAll('li');

function sortList(list) {
  const array = Array.from(list);
  const parent1 = list[0].parentNode;

  array.sort((a, b) => {
    const salaryB = Number(b.dataset.salary.replace(/[^0-9.-]+/g, ''));
    const salaryA = Number(a.dataset.salary.replace(/[^0-9.-]+/g, ''));

    return salaryB - salaryA;
  });

  array.forEach((item) => parent1.append(item));
}

sortList(listEmpl);

function getEmployees(list) {
  return Array.from(list).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace(/[^0-9.-]+/g, '')),
    age: Number(item.dataset.age),
  }));
}

getEmployees(listEmpl);
