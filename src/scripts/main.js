'use strict';

const list = document.querySelector('ul');

function parseSalary(salaryString) {
  const cleanSalary = salaryString.replace(/[^0-9]/g, '');

  return Number(cleanSalary);
}

function sortList(listElement) {
  const items = [...listElement.children];

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listElement.append(...items);
}

function getEmployees(listElement) {
  const items = [...listElement.children];

  return items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortList(list);
getEmployees(list);
