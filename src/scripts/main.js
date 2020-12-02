'use strict';

const list = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sortList(people) {
  const sortedList = people.sort((a, b) =>
    Number(b.dataset.salary.replace(/[$,]/g, ''))
        - Number(a.dataset.salary.replace(/[$,]/g, ''))
  );

  ul.append(...sortedList);
}

function getEmployees(people) {
  return people.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(list);
getEmployees(list);

sortList();
