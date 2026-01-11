'use strict';

const list = document.querySelector('#list');

function parseSalary(dataSalary) {
  return Number(dataSalary);
}

function sortList(listElement) {
  const items = Array.from(listElement.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  items.forEach((item) => {
    list.appendChild(item);
  });
}

function getEmployees(listElement) {
  return Array.from(listElement.children).map((item) => {
    const employeeName = item.querySelector('.name').innerText.trim();
    const position = item.querySelector('.position').innerText.trim();
    const salary = Number(item.dataset.salaryValue);
    const age = Number(item.dataset.age);

    return {
      employeeName,
      position,
      salary,
      age,
    };
  });
}

sortList(list);
getEmployees(list);
