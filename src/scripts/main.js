'use strict';

// 1. Функція №1 — сортує DOM-список за salary (descending)
function sortListBySalary() {
  const ul = document.querySelector('ul');
  const items = Array.from(ul.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = Number(
      a.dataset.salary.replace('$', '').replaceAll(',', ''),
    );
    const salaryB = Number(
      b.dataset.salary.replace('$', '').replaceAll(',', ''),
    );

    return salaryB - salaryA;
  });

  // переставляємо li в DOM
  items.forEach((item) => ul.appendChild(item));
}

// 2. Функція №2 — повертає масив обʼєктів employees
function getEmployees() {
  const items = document.querySelectorAll('li');

  return Array.from(items).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace('$', '').replaceAll(',', '')),
    age: Number(item.dataset.age),
  }));
}

// виклики
sortListBySalary();
getEmployees();
