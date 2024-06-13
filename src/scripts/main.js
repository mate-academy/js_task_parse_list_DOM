'use strict';

const parseToInt = (text) => Number(text.replace(/[$,]/g, ''));
const list = Array.from(document.querySelectorAll('ul li'));

function sortList(listt) {
  list.sort((a, b) => {
    const salaryA = parseToInt(a.getAttribute('data-salary'));
    const salaryB = parseToInt(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  const ul = document.createElement('ul');

  listt.forEach((item) => ul.appendChild(item));

  document.body.appendChild(ul);
}

function getEmployees(listt) {
  const employees = [];

  listt.forEach((item) => {
    const employee = {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: parseToInt(item.getAttribute('data-salary')),
      age: Number(item.getAttribute('data-age')),
    };

    employees.push(employee);
  });

  return employees;
}
sortList(list);

getEmployees(list);
