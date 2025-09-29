'use strict';

function sortList(list) {
  list.sort((a, b) => b.salary - a.salary);

  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  list.forEach((emp) => {
    const li = document.createElement('li');

    li.textContent = emp.name;
    li.dataset.position = emp.position;
    li.dataset.salary = `$${emp.salary}`;
    li.dataset.age = emp.age;
    ul.appendChild(li);
  });
}

function getEmployees(list) {
  return list.map((i) => ({
    name: i.textContent.trim(),
    position: i.dataset.position,
    salary: Number(i.dataset.salary.replace(/[$,]/g, '')),
    age: Number(i.dataset.age),
  }));
}

const listEmpl = [...document.querySelectorAll('li')];
const empObjArr = getEmployees(listEmpl);

sortList(empObjArr);
