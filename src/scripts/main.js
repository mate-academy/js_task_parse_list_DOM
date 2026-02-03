'use strict';

const employeeList = document.querySelector('ul');

const toNumber = (salaryStr) => {
  return Number(salaryStr.replace(/[$,]/g, ''));
};

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = toNumber(a.dataset.salary);
    const salaryB = toNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.append(item));
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((item) => ({
    name: item.innerText.trim(),
    position: item.dataset.position,
    salary: toNumber(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(employeeList);
getEmployees(employeeList);
