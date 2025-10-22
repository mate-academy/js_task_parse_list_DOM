'use strict';

const employeesList = document.querySelector('ul');

function parseSalary(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const itemsArray = Array.from(list.children);

  itemsArray.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  itemsArray.forEach((li) => {
    list.append(li);
  });
}

function getEmployees(list) {
  return Array.from(list.children).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

sortList(employeesList);
getEmployees(employeesList);
