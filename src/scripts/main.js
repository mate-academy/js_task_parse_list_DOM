'use strict';

// 1. Отримуємо список за тегом 'ul' (бо класу .list в HTML немає)
const list = document.querySelector('ul');

/**
 * Допоміжна функція для очищення рядка від '$' та ',' і перетворення в число
 */
const toNum = (value) => {
  if (!value) {
    return 0;
  }

  // Видаляємо все, що не є цифрою (символи $ та коми)
  const cleanValue = value.replace(/[$,]/g, '');

  return Number(cleanValue) || 0;
};

/**
 * Сортує елементи за зарплатою у порядку спадання
 */
function sortList(listElement) {
  if (!listElement) {
    return;
  }

  const items = Array.from(listElement.children);

  items.sort((a, b) => {
    const salaryA = toNum(a.dataset.salary);
    const salaryB = toNum(b.dataset.salary);

    return salaryB - salaryA;
  });

  // Очищаємо і додаємо відсортовані li
  listElement.innerHTML = '';

  items.forEach((item) => {
    listElement.append(item);
  });
}

/**
 * Повертає масив об'єктів працівників
 */
function getEmployees(listElement) {
  if (!listElement) {
    return [];
  }

  return Array.from(listElement.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: toNum(item.dataset.salary),
    age: toNum(item.dataset.age),
  }));
}

// Виклик функцій
sortList(list);
getEmployees(list);
