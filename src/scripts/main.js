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

// const arrayEmploees = list.map(each => getEmployee(each)); // так не працює

arrayEmploees.sort((a, b) =>
  (b.salary.replace(/[^\d]/g, '')) - (a.salary).replace(/[^\d]/g, ''));

for (let i = 0; i < list.length; i++) {
  list[i].innerText = arrayEmploees[i].name;
  list[i].dataset.position = arrayEmploees[i].position;
  list[i].dataset.salary = arrayEmploees[i].salary;
  list[i].dataset.age = arrayEmploees[i].age;
}
