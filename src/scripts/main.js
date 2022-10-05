'use strict';

function sotrSalary() {
  const arrayEmployees = [...document.querySelectorAll('li')].sort((a, b) => b
    .dataset.salary.split(',').join('').slice(1, -1)
  - a.dataset.salary.split(',').join('').slice(1, -1));

  const ulElement = document.querySelector('ul');

  ulElement.innerHTML = `
    ${arrayEmployees.map(x => `
      <li
        data-position="${x.dataset.position}"
        data-salary="${x.dataset.salary}"
        data-age="${x.dataset.age}"
      >
        ${x.innerHTML}
      </li>
    `
  )}
  `;
}

sotrSalary();
// Сортирует лишки

function arrayOfObjects() {
  const arrayEmployees = [...document.querySelectorAll('li')].map(x => {
    return {
      name: x.innerText,
      position: x.dataset.position,
      salary: x.dataset.salary,
      age: x.dataset.age,
    };
  });

  return arrayEmployees;
}

arrayOfObjects();
// Возвращает массив обьектов
