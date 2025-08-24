'use strict';

const list = document.querySelector('ul');

function parseSalary(salary) {
  return Number(salary.replace(/\$|,/g, ''));
}

function sortList(ul) {
  const items = Array.from(ul.children);

  const sortedBySalary = items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  sortedBySalary.forEach((item) => ul.appendChild(item));
}

function getEmployees(items) {
  return Array.from(items).map((item) => {
    return {
      name: item.textContent,
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: item.dataset.age,
    };
  });
}

sortList(list);
getEmployees(list);
