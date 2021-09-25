'use strict';

const list = document.querySelectorAll('li');
const people = [];

function sortList() {
  list
    .forEach(item => people.push({
      name: item.innerText,
      ...item.dataset,
    }));

  people.sort((a, b) => convert(b.salary) - convert(a.salary));

  function convert(str) {
    return +str.replace(/\D/g, '');
  }
}

function getEmployees() {
  for (let i = 0; i < people.length; i++) {
    list[i].innerText = people[i].name;
    list[i].dataset.position = people[i].position;
    list[i].dataset.salary = people[i].salary;
    list[i].dataset.age = people[i].age;
  }
}
sortList();
getEmployees();
