'use strict';

const receivedList = document.querySelector('ul');

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

function sortList(list) {
  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listItems.forEach((item) => {
    return list.appendChild(item);
  });
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: +item.dataset.age,
  }));
}

sortList(receivedList);
getEmployees(receivedList);
