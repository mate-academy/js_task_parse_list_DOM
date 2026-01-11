'use strict';

const list = document.querySelector('#list');

function parseSalary(dataSalary) {
  return Number(dataSalary.replace(/[$,]/g, ''));
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
    const employeeName = item.textContent.trim();
    const position = item.dataset.position;
    const salary = parseSalary(item.dataset.salary);
    const age = Number(item.dataset.age);

    return {
      name: employeeName,
      position,
      salary,
      age,
    };
  });
}

sortList(list);
getEmployees(list);
