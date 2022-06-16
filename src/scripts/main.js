'use strict';

const li = document.querySelectorAll('li');

const list = [...li];

function sortList(arr) {
  const person = [];

  for (const item of arr) {
    item.dataset.name = item.innerText;
    person.push(item.dataset);
  }

  const sorted = person.sort((a, b) =>
    Number(a.salary.replaceAll('$', '').replaceAll(',', ''))
  - Number(b.salary.replaceAll('$', '').replaceAll(',', '')));

  [...li].map(el => el.remove());

  const ul = document.getElementsByTagName('ul');

  for (let i = 0; i < sorted.length; i++) {
    const item = document.createElement('li');

    item.innerText = person[i].name;
    item.dataset.position = person[i].position;
    item.dataset.salary = person[i].salary;
    item.dataset.age = person[i].age;

    [...ul][0].appendChild(item);
  }
}

function getEmployees(arr) {
  const person = [];

  for (const el of arr) {
    const obj = {};

    obj.name = el.innerText.trim();
    obj.salary = el.dataset.salary;
    obj.position = el.dataset.position;
    obj.age = el.dataset.age;

    person.push(obj);
  }

  return person;
}

sortList(list);
getEmployees(list);
