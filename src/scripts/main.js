'use strict';

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

// Функція для сортування списку за зарплатою
function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA; // сортування за спаданням зарплати
  });

  // Додаємо відсортовані елементи назад у список
  items.forEach((item) => list.appendChild(item));
}

// Функція для отримання масиву об'єктів співробітників
function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

// Отримання списку
const employeeList = document.querySelector('ul');

// Виклик функцій
sortList(employeeList);

const employees = getEmployees(employeeList);

// eslint-disable-next-line no-console
console.log(employees);
