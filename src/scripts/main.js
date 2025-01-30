'use strict';

const list = document.querySelector('ul');

function parseSalary(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

function sortList(itemsTeam) {
  const salaryOfWorkres = [...itemsTeam.children];

  salaryOfWorkres.sort((a, b) => {
    const aItem = parseSalary(a.dataset.salary);
    const bItem = parseSalary(b.dataset.salary);

    return bItem - aItem;
  });

  salaryOfWorkres.forEach((item) => list.appendChild(item));
}

function employees(peoples) {
  return [...peoples.children].map((people) => ({
    name: people.textContent.trim(),
    position: people.dataset.position,
    salary: people.dataset.salary,
    age: people.dataset.age,
  }));
}

sortList(list);

employees(list);
