'use strict';

const list = document.querySelectorAll('li');

function getEmployee(info) {
  return {
    name: info.innerText,
    position: info.dataset.position,
    salary: info.dataset.salary,
    age: info.dataset.age,
  };
}

const arrayEmploees = [];

for (const each of list) {
  arrayEmploees.push(getEmployee(each));
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
