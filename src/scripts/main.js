'use strict';

const list = document.querySelector('ul');

function getSalary(salary) {
  const cleanSalary = salary.replaceAll('$', '').replaceAll(',', '');

  return Number(cleanSalary);
}

function sortList(employeesList) {
  const listItems = [...employeesList.children].sort((itemA, itemB) => {
    return getSalary(itemB.dataset.salary) - getSalary(itemA.dataset.salary);
  });

  employeesList.append(...listItems);
}

function getEmployees(employeesList) {
  return [...employeesList.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(list);
getEmployees(list);
