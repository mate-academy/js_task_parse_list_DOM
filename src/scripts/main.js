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

function getEmployeeNames(targetList) {
  return [...targetList.children].map((item) => ({
    name: item.textContent.trim(),
    salary: getSalary(item),
  }));
}

sortList(list);

const employees = getEmployeeNames(list);

window.employees = employees;
