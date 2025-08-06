'use strict';

const list = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

function sortList(items) {
  const sortedListBySalary = Array.from(items).sort((a, b) => {
    const salaryA = getNumberFromSalary(a.dataset.salary);
    const salaryB = getNumberFromSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  sortedListBySalary.forEach((item) => list.appendChild(item));

  return sortedListBySalary;
}

function getEmployees(items) {
  return Array.from(items).map((item) => {
    return {
      name: item.textContent,
      position: item.dataset.position,
      salary: getNumberFromSalary(item.dataset.salary),
      age: item.dataset.age,
    };
  });
}

function getNumberFromSalary(salary) {
  const clearSalary = salary.slice(1);

  return Number(clearSalary.replace(',', ''));
}

const sortedList = sortList(liElements);

getEmployees(sortedList);
