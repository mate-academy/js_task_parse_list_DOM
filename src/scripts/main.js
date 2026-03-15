'use strict';

const list = document.querySelector('ul');

function getSalary(li) {
  const salary = li.dataset.salary;
  const num = Number(salary.replace(/[$,]/g, ''));

  return num;
}

function sortList(li) {
  const items = Array.from(li.querySelectorAll('li'));

  items.sort((a, b) => getSalary(b) - getSalary(a));
  items.forEach((item) => li.appendChild(item));
}

function getEmployees(lis) {
  return Array.from(lis.querySelectorAll('li')).map((li) => ({
    name: li.textContent,
    salary: getSalary(li),
    position: li.dataset.position,
    age: Number(li.dataset.age),
  }));
}

sortList(list);
getEmployees(list);
