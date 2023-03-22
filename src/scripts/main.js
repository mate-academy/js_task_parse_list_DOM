'use strict';

const ulElement = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

function sortList() {
  const items = Array.from(ulElement.children);

  items.sort((a, b) => {
    const salaryA = parseInt(a.dataset.salary.substring(1).replace(',', ''));
    const salaryB = parseInt(b.dataset.salary.substring(1).replace(',', ''));

    return salaryB - salaryA;
  });

  items.forEach(item => ulElement.appendChild(item));

  return items;
}

function getEmployees() {
  const employees = [];

  liElements.forEach(liElement => {
    const employeeName = liElement.innerText;
    const position = liElement.dataset.position;
    const salary = liElement.dataset.salary;
    const age = liElement.dataset.age;

    employees.push({
      name: employeeName,
      position,
      salary,
      age,
    });
  });

  return employees;
}

sortList();
getEmployees();
