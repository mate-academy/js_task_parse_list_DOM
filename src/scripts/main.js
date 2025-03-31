'use strict';

const documentList = document.querySelector('ul');

function parseSalary(salary) {
  return +salary.replace('$', '').replaceAll(',', '');
}

function sortList(list) {
  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((li) => ({
    name: li.textContent,
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: +li.dataset.age,
  }));
}

sortList(documentList);

getEmployees(documentList);
