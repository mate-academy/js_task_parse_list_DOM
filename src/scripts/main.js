'use strict';

//
const list = document.querySelectorAll('li');

// хелпер який перетворює рядок на число та забирає зайві символи
// пишу не в sortList бо потім не зможу його використати у інщій функції

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/\$|,/g, ''));
}

function sortList(itemsList) {
  // перетворюю на масив
  const items = Array.from(itemsList);

  // тут порівнюю 2 елемента
  // з масиву items і юзаю хелпер в
  // якому прописана логіку нашо він мені треба
  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  // item — це кожен <li> з відсортованого масиву.
  // list.parentElement — це <ul>,
  // батьківський елемент для <li>.
  // appendChild(item) переміщує існуючий елемент у кінець списку.
  // додаємо назад у ul
  items.forEach((item) => {
    itemsList[0].parentElement.appendChild(item);
  });
}

// тут уже оновлений NodeList який пройшов через sort ta forEach!!!!!
sortList(list);

const newlist = document.querySelectorAll('li');

function getEmployees(itemsList) {

  return Array.from(itemsList).map((el) => ({
    name: el.textContent,
    position: el.dataset.position,
    salary: parseSalary(el.dataset.salary),
    age: Number(el.dataset.age),
  }));
  
}


const employees = getEmployees(newlist);

// eslint-disable-next-line no-console
console.log(employees);
