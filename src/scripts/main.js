'use strict';

const listEl = document.querySelector('ul');

function getSalaryNumber(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = getSalaryNumber(a.dataset.salary);
    const salaryB = getSalaryNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => {
    list.append(item);
  });
}

function getEmployees(list) {
  const items = list.querySelectorAll('li');
  const result = [];

  for (let i = 0; i < items.length; i++) {
    const employee = {
      name: items[i].textContent.trim(),
      position: items[i].dataset.position,
      salary: getSalaryNumber(items[i].dataset.salary),
      age: Number(items[i].dataset.age),
    };

    result.push(employee);
  }

  return result;
}

// вызов
sortList(listEl);
getEmployees(listEl);
