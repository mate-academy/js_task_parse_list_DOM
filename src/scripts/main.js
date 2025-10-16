'use strict';

function parseSalary(salary) {
  if (!salary || typeof salary !== 'string') {
    return 0;
  }

  const clearSalary = Number(salary.replace(/[$,]/g, ''));

  return isNaN(clearSalary) ? 0 : clearSalary;
}

function sortList(list) {
  if (!list) {
    return;
  }

  const items = Array.from(list.getElementsByTagName('li'));

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  if (!list) {
    return [];
  }

  return Array.from(list.getElementsByTagName('li')).map((el) => ({
    name: el.textContent?.trim() || 'Unknown',
    position: el.dataset?.position?.trim() || 'Unknown',
    age: Number(el.dataset?.age) || 0,
    salary: parseSalary(el.dataset?.salary),
  }));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
// eslint-disable-next-line
const employees = getEmployees(employeeList);
