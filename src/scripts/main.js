'use strict';

const parsedList = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

function sortItems(list) {
  const result = [...list].sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/\D/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/\D/g, ''));

    return salaryB - salaryA;
  });

  result.forEach(employee => parsedList.append(employee));
}

function getEmployees(list) {
  return list.map(employees =>
    Object.assign({ name: employees.innerText }, employees.dataset));
}
sortItems(listItems);
getEmployees(listItems);
