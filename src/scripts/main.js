'use strict';

const employeeList = document.querySelector('ul');

function getSalaryNumber(salary) {
  return Number(salary.replaceAll(',', '').replace('$', ''));
}

function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => {
    const salaryA = getSalaryNumber(a.dataset.salary);
    const salaryB = getSalaryNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.append(...items);
}

function getEmployees(list) {
  const items = [...list.children];

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalaryNumber(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(employeeList);

getEmployees(employeeList);
