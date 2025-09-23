'use strict';

const list = document.querySelector('ul');

// Перетворює зарплату з рядка "$162,700" у число 162700
function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

// Сортує список за зарплатою у спадному порядку
function sortList(ul) {
  const items = Array.from(ul.querySelectorAll('li'));

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );
  items.forEach((item) => ul.appendChild(item));
}

// Повертає масив об'єктів співробітників
function getEmployees(ul) {
  return Array.from(ul.querySelectorAll('li')).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

// Викликаємо обидві функції
sortList(list);
getEmployees(list);
