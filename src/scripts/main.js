'use strict';

// write code here
const list = document.querySelectorAll('li');
const employees = [];

for (const li of list) {
  li.dataset.salary = +(li.dataset.salary.slice(1).split(',').join(''));
}

const sortList = [...list].sort((a, b) => b.dataset.salary - a.dataset.salary);

for (const li of sortList) {
  const employe = {};

  employe.name = li.innerText;
  employe.salary = li.dataset.salary;

  employees.push(employe);
}

for (let i = 0; i < sortList.length; i++) {
  list[i].innerText = employees[i].name;
}
