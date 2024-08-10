'use strict';

const list = document.querySelectorAll('li');

function parseSalary(salaryStr) {
  return parseInt(salaryStr.replace('$', '').replace(',', ''), 10);
}

function sortList(elements) {
  const sortedList = Array.from(list).sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  const parents = list[0].parentElement;

  parent.innerHTML = '';
  sortedList.forEach((item) => parents.appendChild(item));
}

function getEmployees(elements) {
  return Array.from(list).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: parseInt(item.dataset.age, 10),
  }));
}

sortList(list);
getEmployees(list);
