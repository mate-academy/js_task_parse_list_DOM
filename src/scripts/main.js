'use strict';

const list = document.querySelectorAll('li');

function employee(info) {
  const personInfo = {};

  personInfo.name = info.innerText;
  personInfo.position = info.dataset.position;
  personInfo.salary = info.dataset.salary;
  personInfo.age = info.dataset.age;

  return personInfo;
}

const arrayEmploees = [];

for (const each of list) {
  arrayEmploees.push(employee(each));
}

arrayEmploees.sort((a, b) =>
  (b.salary.replace(/[^+\d]/g, '')) - (a.salary).replace(/[^+\d]/g, ''));

let i = 0;

for (const item of list) {
  item.innerText = arrayEmploees[i].name;
  item.dataset.position = arrayEmploees[i].position;
  item.dataset.salary = arrayEmploees[i].salary;
  item.dataset.age = arrayEmploees[i].age;

  i++;
}
