'use strict';

// Допоміжна функція для парсингу зарплати
function parseSalary(str) {
  return Number(str.replace(/[^\d.-]/g, ''));
}

// Сортує список <ul> за спаданням зарплати
function sortList(list) {
  // Перетворюємо HTMLCollection у масив
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);
    return salaryB - salaryA; // спадання
  });

  // Очищаємо поточний список і додаємо відсортовані елементи
  list.innerHTML = '';
  for (const item of items) {
    list.appendChild(item);
  }
}

// Створює масив об’єктів співробітників
function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((li) => ({
    name: li.innerText.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

// --- Виклик функцій ---
const ul = document.querySelector('ul');
sortList(ul);
const employeesArray = getEmployees(ul);
console.log(employeesArray);
