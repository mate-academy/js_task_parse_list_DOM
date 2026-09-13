'use strict';

const ul = document.querySelector('ul');

function getEmployees(list) {
  const items = list.querySelectorAll('li');

  return Array.from(items).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: parseInt(item.dataset.age),
  }));
}

function helperParseSalary(salary) {
  return parseInt(salary.replace(/[$,]/g, ''));
}

function sortList(listElement) {
  const items = listElement.querySelectorAll('li');

  const sortedItems = Array.from(items).sort((a, b) => {
    const salaryA = helperParseSalary(a.dataset.salary);
    const salaryB = helperParseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listElement.append(...sortedItems);
}

sortList(ul);
getEmployees(ul);
