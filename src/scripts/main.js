'use strict';

const listElements = document.querySelector('ul');

function parseSalary(salary) {
  return parseInt(salary.replace('$', '').replace(',', ''));
}

function sortList(list) {
  const sortedList = Array.from(list.querySelectorAll('li')).sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  sortedList.forEach((item) => list.append(item));
}

function getEmployees(list) {
  const items = list.querySelectorAll('li');

  return Array.from(items).map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(listElements);

getEmployees(listElements);
