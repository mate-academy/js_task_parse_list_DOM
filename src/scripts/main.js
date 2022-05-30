'use strict';

const list = document.querySelector('ul');
const items = document.querySelectorAll('li');

function sortList(ulList) {
  const result = [...ulList].sort((a, b) =>
    b.dataset.salary.slice(1).split(',').join('')
      - a.dataset.salary.slice(1).split(',').join(''));

  for (const li in result) {
    list.append(result[li]);
  }

  return list;
}

sortList(items);

function getEmployees(ulList) {
  function getObjectOfEmployee(li) {
    return {
      'name': li.textContent.trim(),
      'position': li.dataset.position,
      'salary': li.dataset.salary,
      'age': li.dataset.age,
    };
  }

  return [...ulList].map(getObjectOfEmployee);
}

getEmployees(items);
