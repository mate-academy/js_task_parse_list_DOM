'use strict';

// 1. Отримуємо дані з DOM (ОДИН раз)
function getEmployees() {
  const items = document.querySelectorAll('li');

  return Array.from(items).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace('$', '').replaceAll(',', '')),
    age: Number(item.dataset.age),
  }));
}

// 2. Рендеримо DOM зі списку employees
function renderEmployees(employeeses) {
  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  employeeses.forEach((employee) => {
    const li = document.createElement('li');

    li.textContent = employee.name;
    li.dataset.position = employee.position;
    li.dataset.salary = `$${employee.salary.toLocaleString('en-US')}`;
    li.dataset.age = employee.age;

    ul.appendChild(li);
  });
}

// 3. Логіка
const employees = getEmployees();

// сортуємо ДАНІ
employees.sort((a, b) => b.salary - a.salary);

// рендеримо DOM
renderEmployees(employees);
