'use strict';

// -----------------------------------------------------------------------------

const peopleList = document.querySelector('ul');
const parseSalary = (str) => Number(str.replace(/[$,]/g, ''));

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  items.forEach((item) => list.append(item));

  return list;
}

function getEmployees(list) {
  return [...list.querySelectorAll('li')].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

const employees = getEmployees(peopleList);

const sortedPeopleList = sortList(peopleList);

// -----------------------------------------------------------------------------

// Код з поясненням

// const peopleList = document.querySelector('ul');

// // Створюємо допоміжну фунцію для форматування чисел
// const parseSalary = (str) => Number(str.replace(/[$,]/g, ''));
// // Number(
// //   el.textContent
// //     .split('')  // розбиваємо рядок на символи
// //     .filter(ch => !isNaN(ch) && ch !== ' ')  // залишаємо тільки цифри
// //     .join('')  // знову збираємо в рядок
// // );

// function sortList(list) {
//   // Перетворюємо колекцію на масив
//   const items = [...list.querySelectorAll('li')];

//   // Сортуємо відформатовані числа з доп. функцією parseSalary
//   items.sort((a, b) => {
//     return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
//   });

//   // Додаємо відсортовані елементи в список
//   items.forEach((item) => list.append(item));

//   return list;
// }

// function getEmployees(list) {
//   // Повертаємо від-map-ний масив в об'єкт
//   return [...list.querySelectorAll('li')].map((item) => ({
//     name: item.textContent.trim(),
//     position: item.dataset.position,
//     salary: parseSalary(item.dataset.salary),
//     age: Number(item.dataset.age),
//   }));
// }

// const employees = getEmployees(peopleList);

// const sortedPeopleList = sortList(peopleList);

// -----------------------------------------------------------------------------

// export { sortList, getEmployees, employees, sortedPeopleList };
