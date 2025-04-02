/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
'use strict';

function getEmployees() {
  return Array.from(document.querySelectorAll('[data-position]')).map(li => ({
    name: li.textContent.trim(),
    position: li.getAttribute('data-position'),
    salary: Number(li.getAttribute('data-salary').replace(/[^\d.]/g, '')), // Число
    age: li.getAttribute('data-age'),
  }));
}

function sortList() {
  const employees = getEmployees();

  employees.sort((a, b) => b.salary - a.salary);

  const listContainer = document.querySelector('ul');

  listContainer.innerHTML = '';

  employees.forEach(employee => {
    const li = document.createElement('li');

    li.setAttribute('data-position', employee.position);
    li.setAttribute('data-salary', employee.salary);
    li.setAttribute('data-age', employee.age);
    li.textContent = employee.name;
    listContainer.appendChild(li);
  });
}

// Вызываем сортировку (можно привязать к кнопке)
sortList();
