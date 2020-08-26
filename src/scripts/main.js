'use strict';

const list = document.querySelectorAll('li');

function sortList() {
  const objects = [];
  const reg = /([^0-9])/g;

  list.forEach(li => (objects.push({
    name: li.innerText,
    position: li.dataset.position,
    salary: Number(li.dataset.salary.replace(reg, '')),
    age: li.dataset.age,
  })));

  return objects.sort((a, b) => b.salary - a.salary);
}

function getEmployers() {
  const objects = sortList(list);

  objects.map((person, i) => {
    list[i].innerHTML = person.name;
    list[i].dataset.position = person.position;
    list[i].dataset.age = person.age;
    list[i].dataset.salary = person.salary;
  });
}

getEmployers();
