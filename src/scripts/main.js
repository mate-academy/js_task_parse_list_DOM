'use strict';

const collection = document.querySelectorAll('li');

function sortList(list) {
  return Array.from(list).sort((a, b) => {
    const salaryA = parseInt(a.dataset.salary.slice(1).split(',').join(''));
    const salaryB = parseInt(b.dataset.salary.slice(1).split(',').join(''));

    return salaryB - salaryA;
  });
}

function getEmployees(list) {
  const sortedList = sortList(list);

  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  sortedList.forEach((li) => ul.appendChild(li));

  return sortedList.map((human) => ({
    name: human.innerText,
    position: human.dataset.position,
    salary: human.dataset.salary,
    age: human.dataset.age,
  }));
}

getEmployees(collection);
