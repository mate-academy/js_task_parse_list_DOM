'use strict';

const list = document.querySelector('ul');

function parseSalary(str) {
  return Number((str || '').replace(/[^\d.-]/g, ''));
}

function sortList(listElement) {
  const sortedList = Array.from(listElement.children).sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  sortedList.forEach((li) => {
    listElement.append(li);
  });
}

function getEmployees(listElement) {
  return Array.from(listElement.children).map((li) => {
    return {
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: parseSalary(li.dataset.salary),
      age: Number(li.dataset.age),
    };
  });
}

sortList(list);

getEmployees(list);
