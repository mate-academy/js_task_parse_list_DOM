'use strict';

// write code here
function makeObject() {
  const li = document.querySelectorAll('li');
  const people = [];

  for (const item of li) {
    const person = {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: Number(item.dataset.age),
    };

    people.push(person);
  }

  return people;
}

function sortSalaries() {
  const li = document.querySelectorAll('li');
  const people = [];

  for (const item of li) {
    const salary = Number(item.dataset.salary.replace(/\D/g, ''));

    people.push(salary);
  }

  const allSalary = people.sort((a, b) => a - b);

  return allSalary;
}

// Виклики:
makeObject();
sortSalaries();
