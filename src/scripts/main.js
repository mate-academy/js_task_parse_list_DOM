'use strict';

const list = document.querySelector('ul');

function getSalary(element) {
  const salary = element.dataset.salary.replace(/[$,]/g, '');

  return Number(salary);
}

function sortList(targetList) {
  const items = [...targetList.children];

  items.sort((a, b) => {
    return getSalary(b) - getSalary(a);
  });

  targetList.innerHTML = '';
  items.forEach((item) => targetList.append(item));
}

function getEmployees(targetList) {
  return [...targetList.children].map((item) => ({
    name: item.textContent.trim(),
    salary: getSalary(item),
    position: item.dataset.position,
    age: Number(item.dataset.age),
  }));
}

sortList(list);

const employees = getEmployees(list);

window.employees = employees;
