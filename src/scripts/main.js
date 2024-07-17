'use strict';

const lists = document.querySelectorAll('li');

const salaries = [];
const employees = [];

for (const li of lists) {
  const salaryString = li.getAttribute('data-salary').replaceAll(/[^0-9]/g, '');
  const salary = Number(salaryString);

  salaries.push({ element: li, salary: salary });
}

function sortList(list) {
  list.sort((a, b) => b.salary - a.salary);

  const ul = document.querySelector('ul');

  list.forEach((item) => ul.appendChild(item.element));
}

function getEmployees(list) {
  for (const li of list) {
    employees.push({
      name: li.textContent.trim(),
      position: li.getAttribute('data-position'),
      salary: li.getAttribute('data-salary'),
      age: li.getAttribute('data-age'),
    });
  }
}

sortList(salaries);
getEmployees(lists);
