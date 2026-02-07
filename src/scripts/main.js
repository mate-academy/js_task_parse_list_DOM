'use strict';

// конвертуємо зарплату у число
function getSalaryNumber(el) {
  return Number(el.dataset.salary.replace(/[$,]/g, '')); // прибираємо $ і коми
}

// сортування списку у спадному порядку
function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => getSalaryNumber(b) - getSalaryNumber(a));
  items.forEach((item) => list.appendChild(item)); // оновлюємо DOM
}

// отримання масиву об'єктів співробітників
function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(), // ім'я з тексту li
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace(/[$,]/g, '')),
    age: Number(item.dataset.age),
  }));
}

const employeeList = document.querySelector('ul');

if (employeeList) {
  sortList(employeeList); // сортуємо список у DOM

  const employeesArray = getEmployees(employeeList); // масив об'єктів

  
}
