'use strict';

// 1. Знаходимо батьківський елемент (список)
// const list = document.querySelector('ul');

// 2. Отримуємо перший <li>
// const firstLi = list.firstElementChild;
// 3. Дістаємо ім'я
// const name = firstLi.textContent.trim();
// 4. Отримуємо другий <li>
// const secondLi = firstLi.nextElementSibling;
// 5. Дістаємо ім'я та зарплату
// const secondName = secondLi.textContent.trim();
// const secondSalary = secondLi.dataset.salary;
// 6. Виводимо функцію для перетворення рядка з грошима у число

function fromStringToNumber(stringWithMoney) {
  // 1. Створюємо змінну для очищених даних
  const cleanData = stringWithMoney.replace(/\D/g, '');

  // 2. Повертаємо результат перетворення у число
  return parseInt(cleanData, 10);
}

function sortList(element) {
  // 1. Отримуємо всі дочірні елементи (li) та перетворюємо їх на масив
  const items = Array.from(element.children);

  // 2. Використовуємо метод sort
  items.sort((a, b) => {
    // Тут нам треба отримати зарплату кожного працівника (a та b)
    // і перетворити її на число за допомогою нашої функції fromStringToNumber

    const salaryA = fromStringToNumber(a.dataset.salary);
    const salaryB = fromStringToNumber(b.dataset.salary);

    // Пам'ятаєш, ми обговорювали порядок сортування?
    // Нам потрібно від найбільшої зарплати до найменшої (descending order).
    return salaryB - salaryA;
  });

  // 3. Тепер відсортовані елементи треба додати назад у список
  items.forEach((li) => element.append(li));
}

function getEmployees(element) {
  // Перетворюємо колекцію на масив і проходимо по кожному li
  return Array.from(element.children).map((li) => {
    return {
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: fromStringToNumber(li.dataset.salary),
      age: parseInt(li.dataset.age, 10),
    };
  });
}
// 1. Знаходимо список

const list = document.querySelector('ul');

if (list) {
  // 1. Сортуємо елементи прямо на сторінці
  sortList(list);

  // 2. Отримуємо дані. Щоб лінтер не сварився на "unused-vars",
  // ми можемо або використати змінну, або просто викликати функцію.
  const employees = getEmployees(list);

  // Якщо ти хочеш пройти комміт, але залишити перевірку,
  // можна використати спеціальний коментар для ESLint:
  // eslint-disable-next-line no-console
  console.log(employees);
}
