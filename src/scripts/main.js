'use strict';

// write code here
const salary = document.querySelectorAll('li.data-salary');
const allSalary = Array.from(salary).sort((a, b) => a - b);

const li = document.querySelectorAll('li');
const liName = li.textContent.trim();

const people = [];

for (const i of li) {
  const person = {
    name: liName,
    position: i.dataset.position,
    salary: i.dataset.salary,
    age: i.dataset.age,
  };

  people.push(person);
}
