'use strict';

function helper(string) {
  if (!string) {
    return 0;
  }

  const cleanString = string.replace(/[$,]/g, '').trim();

  return Number(cleanString);
}

function sortList(list) {
  if (!list) {
    return;
  }

  const allLi = [...list.querySelectorAll('li')];

  allLi.sort((a, b) => {
    const salaryA = helper(a.dataset.salary);
    const salaryB = helper(b.dataset.salary);

    return salaryB - salaryA;
  });

  allLi.forEach((li) => {
    list.append(li);
  });
}

function getEmployees(list) {
  if (!list) {
    return [];
  }

  const employees = [];

  list.querySelectorAll('li').forEach((item) => {
    employees.push({
      name: item.textContent.trim().split(' ')[0],
      position: item.dataset.position,
      salary: helper(item.dataset.salary),
      age: helper(item.dataset.age),
    });
  });

  return employees;
}

const mainList = document.querySelector('ul');

if (mainList) {
  sortList(mainList);
  getEmployees(mainList);
}
