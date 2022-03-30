'use strict';

const listElements = document.querySelectorAll('li');
const ul = document.querySelector('ul');

const sortList = (list) => {
  const listSorted = [...list].sort((a, b) => b.dataset.salary.replace(
    /,/g, '').slice(1) - a.dataset.salary.replace(/,/g, '').slice(1));

  for (const li of listSorted) {
    ul.append(li);
  }
};

const getEmployees = (list) => {
  return [...list].map((li) => ({
    name: li.textContent,
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: li.dataset.age,
  }));
};

sortList(listElements);
getEmployees(listElements);
