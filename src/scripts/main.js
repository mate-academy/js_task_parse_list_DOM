'use strict';

const list = document.querySelector('ul');

function parseSalary(salaryString) {
  return Number(salaryString.replace('$', '').replace(',', ''));
}

function sortList(listElement) {
  const items = [...listElement.children];

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((n) => listElement.appendChild(n));
}

function getEmployees(emplist) {
  return [...emplist.children].map((n) => {
    return {
      name: n.textContent.trim(),
      position: n.dataset.position,
      salary: parseSalary(n.dataset.salary),
      age: Number(n.dataset.age),
    };
  });
}

sortList(list);
getEmployees(list);
