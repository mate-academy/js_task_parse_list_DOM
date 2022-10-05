'use strict';

function conversion(arrayLi) {
  return arrayLi.sort((a, b) => b
    .dataset.salary.split(',').join('').slice(1, -1)
    - a.dataset.salary.split(',').join('').slice(1, -1));
}

function sotrSalary() {
  const arrayEmployees = conversion([...document.querySelectorAll('li')]);

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
