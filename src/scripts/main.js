'use strict';

const userList = document.querySelector('ul');

function getSalaryNumber(str) {
  return Number(str.replaceAll('$', '').replaceAll(',', ''));
}

function getEmployees(list) {
  return Array.from(list.children).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: getSalaryNumber(li.dataset.salary),
    age: li.dataset.age,
  }));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = getSalaryNumber(a.dataset.salary);
    const salaryB = getSalaryNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  items.forEach((item) => list.append(item));
}

getEmployees(userList);
sortList(userList);
