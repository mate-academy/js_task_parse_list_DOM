'use strict';

// write code here

function parseSalary(salary){
  return parseFloat(salary.replace(/[\$,]/g, ''))
}

function sortList(list){
  const items = Array.from(list.children);
  items.sort((a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary));

  items.forEach(item => list.appendChild(item));
}

function getPerson(list){
  return Array.from(list.children).map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: parseInt(item.dataset.age, 10),
  }));
}

const personList = document.querySelector('ul');

sortList(personList);
const person = getPerson(personList);


console.log(person);
