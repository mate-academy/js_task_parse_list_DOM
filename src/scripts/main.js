'use strict';

function getEmployees(list) {
  const listEmployee = [...list.querySelectorAll('li')];

  return listEmployee.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: Number(item.dataset.age),
    };
  });
}

function sortList(list) {
  const listEmployee = [...list.querySelectorAll('li')];

  listEmployee.sort((first, second) => {
    const salaryA = Number(first.dataset.salary.replace(/[^0-9.-]+/g, ''));
    const salaryB = Number(second.dataset.salary.replace(/[^0-9.-]+/g, ''));

    return salaryB - salaryA;
  });

  listEmployee.forEach((item) => list.append(item));
}

const employee = document.querySelector('ul');

sortList(employee);

getEmployees(employee);
