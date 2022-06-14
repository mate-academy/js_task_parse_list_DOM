'use strict';

// write code here

const li = document.getElementsByTagName('li');

const list = [...li];

function sortList(arr) {
  const people = [];

  for (const el of arr) {
    el.dataset.name = el.innerText;
    people.push(el.dataset);
  }

  const sorted = people.sort((a, b) => parseInt(b.salary
    .replaceAll(',', '').replace('$', '')) - parseInt(a.salary
    .replaceAll(',', '').replace('$', '')));

  [...li].map(el => el.remove());

  const ul = document.getElementsByTagName('ul');

  for (let i = 0; i < sorted.length; i++) {
    const item = document.createElement('li');

    item.innerText = people[i].name;
    item.dataset.position = people[i].position;
    item.dataset.salary = people[i].salary.toLocaleString('en-US');
    item.dataset.age = people[i].age;

    [...ul][0].appendChild(item);
  }
}

function getEmployees(arr) {
  const people = [];

  for (const el of arr) {
    const obj = {};

    obj.name = el.innerText;
    obj.salary = el.dataset.salary;
    obj.position = el.dataset.position;
    obj.age = el.dataset.age;

    people.push(obj);
  }

  return people;
}

getEmployees(list);
sortList(list);
