'use strict';

const list = document.querySelector('ul');

/** перетворюємо на число */
function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/\$|,/g, ''));
}

/** сортуємо зп від більшого до меншого */
function sortList(listElement) {
  const items = Array.from(listElement.querySelectorAll('li'));

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((item) => listElement.appendChild(item));
}

/**  масив обʼєктів співробітників */
function getEmployees(listElement) {
  const items = Array.from(listElement.querySelectorAll('li'));

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

/** викликаємо обидві функції */
sortList(list);
getEmployees(list);
