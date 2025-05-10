'use strict';

const listOfEmployees = document.querySelectorAll('li');

function sortList(list) {
  const sortedList = Array.from(list).sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  sortedList.forEach((item) => ul.appendChild(item));
}

function getEmployees(list) {
  const items = Array.from(list);
  const employees = items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: Number(item.dataset.salary.replace(/[$,]/g, '')),
      age: Number(item.dataset.age),
    };
  });

  return employees;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
