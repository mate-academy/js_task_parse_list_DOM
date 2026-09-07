'use strict';

// write code here

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

function sortList(employeelist) {
  const items = [...employeelist.children];

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => employeelist.appendChild(item));
}

function getEmployees(employeelist) {
  const items = [...employeelist.children];

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
