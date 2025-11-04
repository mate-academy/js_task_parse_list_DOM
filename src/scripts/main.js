'use strict';

// Найди и получи список из документа.

// Создай функцию sortlist, которая принимает список (list) и
// сортирует его элементы по убыванию зарплаты, взятой из data-атрибута.

// Зарплата в data-атрибуте хранится как строка, н
// е забудь преобразовать её в число.

// Для этого создай вспомогательную функцию.

// После сортировки добавь (append) отсортированные элементы обратно в список.

// Создай функцию getEmployees, которая принимает список (list)
// и возвращает массив правильных объектов (из элементов списка).

// Вызови обе функции.

// Готово.
const list = document.querySelector('ul');

// Вспомогательная функция — приводит зарплату к числу
function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}
/* eslint-disable no-shadow */

function sortList(list) {
  const li = Array.from(list.children);
  // console.log(li);

  li.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  for (const ch of li) {
    list.append(ch);
  }
  // Возвращаем массив объектов сотрудников

  return getEmployees(list);
}

// Функция getEmployees превращает набор узлов в объекты с которыми
// непосредственно можно работать в будующем для вычисления средней зарплаты
// и так дальше. А HTML(DOM) это визуальный слой, который просто
// показывает информацию без возмоности работы с ней.

function getEmployees(list) {
  const arr = [];

  for (const worker of list.children) {
    const obj = {
      name: worker.textContent.trim(),
      position: worker.dataset.position,
      salary: parseSalary(worker.dataset.salary),
      age: Number(worker.dataset.age),
    };

    arr.push(obj);
  }

  return arr;
}

// sortlist() → вызывает getEmployees(list) → getEmployees

// возвращает массив объектов → sortlist возвращает этот массив наружу

// const li = Array.from(list.children); работает со всеми детьми тега ul.

sortList(list);
