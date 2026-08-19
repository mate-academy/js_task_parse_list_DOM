'use strict';

const listContainer = document.querySelector('ul');
const liList = document.querySelectorAll('li');

function sortList(list) {
  const sorted = [...list].sort(
    (a, b) =>
      b.dataset.salary.slice(1).replaceAll(',', '') -
      a.dataset.salary.slice(1).replaceAll(',', ''),
  );

  listContainer.innerHTML = '';

  sorted.forEach((element) => {
    listContainer.appendChild(element);
  });
}

function getEmployees(list) {
  const resArr = [];

  list.forEach((item) => {
    resArr.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  });

  return resArr;
}

sortList(liList);
getEmployees(liList);
