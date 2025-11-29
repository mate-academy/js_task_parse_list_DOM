'use strict';

const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

function parseSalary(salaryString) {
  return Number(salaryString.replace(/,/g, '').replace('$', ''));
}

function getEmployees(list) {
  const result = [];

  list.forEach((item) => {
    const personName = item.textContent.trim();
    const position = item.getAttribute('data-position');
    const salary = parseSalary(item.getAttribute('data-salary'));
    const age = Number(item.getAttribute('data-age'));

    result.push({
      name: personName,
      position,
      salary,
      age,
    });
  });

  return result;
}

function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  items.forEach((item) => {
    list.append(item);
  });
}

getEmployees(li);
sortList(ul);
