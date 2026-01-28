'use strict';

// 1. Отримуємо список елементів <ul>
const employeeList = document.querySelector('ul');

// Допоміжна функція: конвертує зарплату зі строки "$123,456" у число 123456
function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

// 2. Функція сортування списку за зарплатою у спадному порядку
function sortList(list) {
  // Отримуємо усі <li> як масив
  const items = Array.from(list.children);

  // Сортуємо масив
  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  // Додаємо відсортовані елементи назад у список
  items.forEach((item) => list.appendChild(item));
}

// 3. Функція для отримання масиву об’єктів співробітників
function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

// Викликаємо функції
sortList(employeeList);
getEmployees(employeeList); // результат можна використати далі у код
