'use strict';

// Отримуємо всі елементи li
const employees = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

// Функція сортує список за зарплатою (у порядку спадання)
const sortEmployees = (employees) => {
  employees.sort((empA, empB) => {
    const salaryA = Number(empA.getAttribute('data-salary').replace(/[^\d.-]/g, ''));
    const salaryB = Number(empB.getAttribute('data-salary').replace(/[^\d.-]/g, ''));
    return salaryB - salaryA; // спадання
  });

  return employees;
};

// Функція повертає масив об’єктів співробітників
const getObjects = (employees) => {
  return employees.map(emp => ({
    name: emp.innerText.trim(),
    position: emp.getAttribute('data-position'),
    salary: emp.getAttribute('data-salary'),
    age: emp.getAttribute('data-age'),
  }));
};

const sortedEmployees = sortEmployees(employees);

ul.innerHTML = '';
for (const li of sortedEmployees) {
  ul.appendChild(li);
}

const employeesObjects = getObjects(sortedEmployees);

