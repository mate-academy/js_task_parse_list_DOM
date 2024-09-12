'use strict';

// write code here
const ulList = document.querySelector('ul');

function convertStringtoNum(salary) {
  return +salary.substring(1).split(',').join('');
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = convertStringtoNum(a.dataset.salary);
    const salaryB = convertStringtoNum(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.append(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: convertStringtoNum(item.dataset.salary),
    age: item.dataset.age,
  }));
}

sortList(ulList);
getEmployees(ulList);
