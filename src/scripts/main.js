'use strict';

const ullist = document.querySelector('ul');
// получаем все элементы списка
// const items = list.querySelectorAll('li');

function sortList(list) {
  const items = Array.from(list.children);
  const sortable = items.map((item) => ({
    element: item,
    salary: convertToNumber(item.dataset.salary),
  }));

  // сортируем элементы по зарплате в порядке убывания
  sortable.sort((a, b) => b.salary - a.salary);

  // перемещаем элементы в список в порядке отсортированного массива
  sortable.forEach(({ element }) => ullist.appendChild(element));
}

function convertToNumber(salaryString) {
  return parseFloat(salaryString.replace(/\$/g, ''));
}

function getEmployees(list) {
  const employees = Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: convertToNumber(item.dataset.salary),
    age: parseInt(item.dataset.age),
  }));

  return employees;
}

sortList(ullist);
getEmployees(ullist);
