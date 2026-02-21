'use strict';

const list = document.querySelector('ul');

const parseSalary = (el) => Number(el.dataset.salary) || 0;

function sortList(listElement) {
  // 1. Перетворюємо NodeList у масив
  const items = [...listElement.children];

  // 2. Сортуємо в порядку спадання (b - a)
  items.sort((a, b) => parseSalary(b) - parseSalary(a));

  // 3. Оновлюємо DOM
  items.forEach((item) => listElement.appendChild(item));
}

function getEmployees(listElement) {
  return [...listElement.children].map((item) => {
    const nameText = item.textContent.split('\n')[0].trim() || '';
    const position = item.dataset.position || '';
    const salary = parseSalary(item);
    const age = Number(item.dataset.age) || null;

    return {
      name: nameText,
      position,
      salary,
      age,
    };
  });
}

sortList(list);

getEmployees(list);
