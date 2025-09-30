'use strict';

// write code here
const parseSalary = (salaryStr) => {
  if (!salaryStr) {
    return 0;
  }

  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
};

// Сортує список <ul> за спаданням зарплати
const sortList = (ulElement) => {
  const items = Array.from(ulElement.querySelectorAll('li'));

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  // appendChild переміщує елементи у правильному порядку
  items.forEach((item) => ulElement.appendChild(item));

  return items; // повертаємо масив на випадок подальшого використання
};

// Повертає масив співробітників з data-* атрибутів
const getEmployees = (ulElement) => {
  const items = Array.from(ulElement.querySelectorAll('li'));

  return items.map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
};

// Виклик функцій
const list = document.querySelector('ul'); // знаходимо список

sortList(list); // сортуємо елементи

getEmployees(list);
