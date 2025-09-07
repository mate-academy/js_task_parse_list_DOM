'use strict';

const employeesList = document.querySelector('ul');

sortList(employeesList);

getEmployees(employeesList);

function sortList(list) {
  const listItems = Array.from(list.children);
  const sortedArray = listItems.sort((a, b) => {
    return parseSalarys(b.dataset.salary) - parseSalarys(a.dataset.salary);
  });

  sortedArray.forEach((li) => {
    list.appendChild(li);
  });
}

function getEmployees(list) {
  return [...list.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalarys(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

function parseSalarys(string) {
  return Number(string.replace(/[^\d.-]/g, ''));
}
