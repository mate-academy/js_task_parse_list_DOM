'use strict';

function parseSalary(value) {
  return Number(value.replace(/[$,]/g, ''));
}

function sortList(ulElement) {
  const items = Array.from(ulElement.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => ulElement.append(item));
}

function getEmployees(ulElement) {
  return Array.from(ulElement.children).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

const list = document.querySelector('ul');

sortList(list);
getEmployees(list); // не логуй у консоль
