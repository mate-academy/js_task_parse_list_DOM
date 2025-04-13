'use strict';

const employs = document.querySelectorAll('li');
const employData = [];

// Збір даних
for (const employ of employs) {
  const position = employ.dataset.position;
  const salary = +employ.dataset.salary.replace(/[^0-9.]/g, '');
  const age = +employ.dataset.age;

  employData.push({
    element: employ,
    position,
    salary,
    age,
  });
}

// Функція сортування за зарплатою
const sortList = (list) => {
  list.sort((a, b) => b.salary - a.salary);
};

// Функція для відображення у DOM
const getEmployees = (list) => {
  const ul = document.querySelector('ul');

  for (const employ of list) {
    ul.appendChild(employ.element);
  }
};

// Виклики функцій
sortList(employData);
getEmployees(employData);