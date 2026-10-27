'use strict';

function formatNumber(salary) {
  const formated = salary.slice(1).replace(',', '');

  return Number(formated);
}

function sortList(list) {
  const employees = Array.from(document.querySelectorAll('li'));

  employees.sort((a, b) => {
    return formatNumber(b.dataset.salary) - formatNumber(a.dataset.salary);
  });

  employees.forEach((item) => {
    list.append(item);
  });
}

const lista = document.querySelector('ul');

sortList(lista);

function getEmployees(list) {
  const employees = Array.from(list.querySelectorAll('li'));

  return employees.map((employee) => {
    return {
      name: employee.textContent,
      position: employee.dataset.position,
      salary: formatNumber(employee.dataset.salary),
      age: Number(employee.dataset.age),
    };
  });
}

getEmployees(lista);
