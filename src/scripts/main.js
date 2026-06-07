'use strict';

function sortList(listElement) {
  const items = Array.from(listElement.querySelectorAll('li'));
  const sortSalary = items.sort(
    (a, b) => convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary),
  );

  return listElement.append(...sortSalary);
}

function getEmployees(listElement) {
  const items = Array.from(listElement.querySelectorAll('li'));

  const employee = items.map((li) => {
    return {
      name: li.dataset.name,
      position: li.dataset.position,
      salary: convertSalary(li.dataset.salary),
      age: Number(li.dataset.age),
    };
  });

  return employee;
}

function convertSalary(salaryString) {
  return Number(salaryString.replace('$', '').replace(',', ''));
}

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
