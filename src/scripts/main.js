'use strict';

function sortList(list) {
  return list.sort((a, b) => {
    const salaryA = +a.dataset.salary.replace(/,/g, '').replace(/\$/, '');
    const salaryB = +b.dataset.salary.replace(/,/g, '').replace(/\$/, '');

    return salaryB - salaryA;
  });
}

function getEmployes(list) {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    result[i] = {};
    result[i].name = list[i].textContent.trim();
    result[i].position = list[i].dataset.position;
    result[i].age = list[i].dataset.age;
    result[i].salary = list[i].dataset.salary;
  }

  return result;
}

const listem = [...document.querySelectorAll('li')];
const sorted = getEmployes(sortList(listem));
const newlist = [...document.querySelectorAll('li')];

for (let i = 0; i < listem.length; i++) {
  newlist[i].textContent = sorted[i].name;
}
