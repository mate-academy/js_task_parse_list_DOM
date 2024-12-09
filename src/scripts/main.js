'use strict';

const listItem = document.querySelectorAll('li');

function sortList(list) {
  const arrayList = Array.from(list);

  const sortedList = arrayList.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[^0-9.-]+/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[^0-9.-]+/g, ''));

    return salaryB - salaryA;
  });

  const parents = document.querySelector('ul');

  parents.innerHTML = '';
  sortedList.forEach((item) => parents.appendChild(item));

  return sortedList;
}

function getEmployees(list) {
  return Array.from(list).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace(/[^0-9.-]+/g, '')),
    age: item.dataset.age,
  }));
}

sortList(listItem);

getEmployees(sortList(listItem));
