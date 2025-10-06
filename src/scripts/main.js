'use strict';

const employees = document.querySelector('ul');
const parseSalary = (salary) =>
  parseInt(salary.replaceAll('$', '').replaceAll(',', ''));

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.append(item));
}

function getEmployees(list) {
  const items = Array.from(list.children);

  items.map((item) => {
    return {
      name: item.textContent,
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: item.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);
