'use strict';

function convertingToNumber(stringToConvert) {
  // Видаляємо символ долара
  let numberStr = stringToConvert.split('$').join('');

  // Видаляємо коми
  numberStr = numberStr.split(',').join('');

  // Перетворюємо на число
  const number = Number(numberStr);

  return number;
}

function getEmployees(listToConvert) {
  const employeesArray = [];

  listToConvert.forEach((item) => {
    const employee = {
      name: item.textContent.trim(),
      position: { ...item.dataset }.position,
      salary: { ...item.dataset }.salary,
      age: { ...item.dataset }.age,
    };

    employeesArray.push(employee);
  });

  return employeesArray;
}

const list = [...document.querySelectorAll('li')];

function sortList(listToSort) {
  return listToSort.sort((a, b) => {
    const firstSalary = { ...a.dataset }.salary;
    const secondDataset = { ...b.dataset }.salary;
    const normilizedFirstSalary = convertingToNumber(firstSalary);
    const normilizedSecondSalary = convertingToNumber(secondDataset);

    return normilizedSecondSalary - normilizedFirstSalary;
  });
}

const sortedList = sortList(list);

getEmployees(sortedList);

const ul = document.querySelector('ul');

ul.innerHTML = '';

sortedList.forEach((li) => {
  // Створення нового елемента 'li'
  const newLi = document.createElement('li');

  // Додавання текстового контенту
  newLi.textContent = li.textContent;

  // Додавання всіх data-атрибутів
  Object.entries(li.dataset).forEach(([key, value]) => {
    newLi.dataset[key] = value;
  });

  // Додавання нового 'li' до списку
  ul.appendChild(newLi);
});
