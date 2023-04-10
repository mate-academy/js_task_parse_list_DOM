'use strict';

const list = document.querySelectorAll('li');
const ul = document.querySelector('ul');

// сортування за з.п
// eslint-disable-next-line no-shadow
function sortBySalary(list) {
  function convertToNumber(str) {
    return parseInt(str.replace(/\D/g, ''));
  }

  // eslint-disable-next-line no-shadow
  const sortedList = [...list].sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  return sortedList;
}

// масив об'єктів
// eslint-disable-next-line no-shadow
function getEmployees(list) {
  // eslint-disable-next-line no-shadow
  const employees = [];

  list.forEach(item => {
    employees.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  });

  return employees;
}

// запуск обох функцій для списку li-шок
const sortedList = sortBySalary(list);
const employees = getEmployees(sortedList);

// очистити вміст ul
ul.innerHTML = '';

// створення нових li-елементів з масиву відсортованих об'єктів
employees.forEach(item => {
  const li = document.createElement('li');

  li.textContent = item.name;
  li.setAttribute('data-name', item.name);
  li.setAttribute('data-position', item.position);
  li.setAttribute('data-salary', item.salary);
  li.setAttribute('data-age', item.age);
  ul.appendChild(li);
});
