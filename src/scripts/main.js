'use strict';

const getList = document.querySelector('ul').children;

const getNumber = (str) => {
  return +str.slice(1).replace(',', '.');
};

const sortList = (list) => {
  const items = Array.from(list);

  items.forEach((item) => {
    item.dataset.salary = getNumber(item.dataset.salary);
    item.dataset.name = item.textContent.trim();
  });
  items.sort((a, b) => b.dataset.salary - a.dataset.salary);
  items.forEach((item) => list[0].parentElement.appendChild(item));
};

const getEmployees = (list) => {
  const items = Array.from(list);

  return items.map((item) => ({
    name: item.dataset.name,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
};

sortList(getList);
getEmployees(getList);
