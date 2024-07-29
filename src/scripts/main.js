'use strict';

// Функція перетворює зарплату з рядка в число
function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, '').trim());
}

// Функці створює масив з обʼєктів
function getEmployees(list) {
  return [...list].map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: parseSalary(item.getAttribute('data-salary')),
      age: item.getAttribute('data-age'),
    };
  });
}

// Функція сортування обʼєктів за зарплатою
function sortList(list) {
  const employees = getEmployees(list);
  const sortedEmployees = employees.sort((a, b) => b.salary - a.salary);

  // Знаходимо посилання на HTML
  const ul = document.querySelector('ul');

  // Очищуємо його
  ul.innerHTML = '';

  // Проходимось по кожному обʼєкту створюємо HTML li  та додаємо його
  sortedEmployees.forEach((employee) => {
    const li = document.createElement('li');

    li.setAttribute('data-position', employee.position);
    li.setAttribute('data-salary', employee.salary);
    li.setAttribute('data-age', employee.age);
    li.textContent = employee.name;
    ul.appendChild(li);
  });
}

// Отримуємо всі елементи <li>
const allUsers = document.querySelectorAll('li');

// Викликаємо саму функцію та оновлюємо список
sortList(allUsers);
