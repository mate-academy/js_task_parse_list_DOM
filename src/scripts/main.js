'use strict';

// Функція для конвертації зарплати в число
function convertSalaryToNumber(salary) {
  return +salary.replace(/[^0-9]/g, '');
}

function sortList(listProperty) {
  const listArray = Array.from(listProperty);

  // Сортуємо масив за зарплатою
  listArray.sort((a, b) => {
    const salaryA = convertSalaryToNumber(a.dataset.salary);
    const salaryB = convertSalaryToNumber(b.dataset.salary);

    return salaryB - salaryA; // Сортування у спадному порядку
  });

  // Оновлюємо DOM: очищаємо існуючі елементи і додаємо відсортовані
  const ul = document.querySelector('ul');

  ul.innerHTML = ''; // Очищаємо існуючі елементи
  listArray.forEach((item) => ul.appendChild(item));
}

// Функція для отримання співробітників як масиву об'єктів
function getEmployees(listPropertyTwo) {
  return Array.from(listPropertyTwo).map((item) => ({
    name: item.textContent.trim(),
  }));
}

// Отримуємо всі елементи списку з атрибутом data-salary
const allListEmployee = document.querySelectorAll('li[data-salary]');

// Викликаємо функції
sortList(allListEmployee);

const employees = getEmployees(allListEmployee);

// eslint-disable-next-line no-console
console.log(employees);
