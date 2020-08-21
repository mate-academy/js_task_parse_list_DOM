'use strict';

const list = document.querySelectorAll('li');

function sortList() {
  const objects = [];
  const reg = /([^0-9])/g;

  list.forEach(x => (objects.push({
    name: x.innerText,
    position: x.dataset.position,
    salary: Number(x.dataset.salary.replace(reg, '')),
    age: x.dataset.age,
  })));

  return objects.sort((a, b) => b.salary - a.salary);
}

function getEmployers() {
  const objects = sortList(list);

  objects.map((x, i) => {
    list[i].innerHTML = x.name;
    list[i].dataset.position = x.position;
    list[i].dataset.age = x.age;
    list[i].dataset.salary = x.salary;
  });
}

getEmployers();
