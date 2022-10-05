'use strict';

function conversion(str) {
  return str.dataset.salary.split(',').join('').slice(1, -1);
}

function sotrSalary() {
  const arrayEmployees = [...document.querySelectorAll('li')]
    .sort((a, b) => conversion(b) - conversion(a));

  const ulElement = document.querySelector('ul');

  ulElement.innerHTML = `
    ${arrayEmployees.map(li => `
      <li
        data-position="${li.dataset.position}"
        data-salary="${li.dataset.salary}"
        data-age="${li.dataset.age}"
      >
        ${li.innerHTML}
      </li>
    `
  )}
  `;
}

sotrSalary();
// Сортирует лишки

function arrayOfObjects() {
  const arrayEmployees = [...document.querySelectorAll('li')].map(li => {
    return {
      name: li.innerText,
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    };
  });

  return arrayEmployees;
}

arrayOfObjects();
// Возвращает массив обьектов
