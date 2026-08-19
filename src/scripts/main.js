'use strict';

const listContainer = document.querySelector('ul');
const liList = document.querySelectorAll('li');

function salaryToNum(item) {
  return +item.dataset.salary.slice(1).replaceAll(',', '');
}

function sortList(list) {
  const sorted = [...list].sort((a, b) => salaryToNum(b) - salaryToNum(a));

  listContainer.innerHTML = '';

  sorted.forEach((element) => {
    listContainer.appendChild(element);
  });
}

function getEmployees(list) {
  const resArr = [];

  list.forEach((item) => {
    resArr.push({
      name: item.textContent,
      position: item.dataset.position,
      salary: salaryToNum(item),
      age: item.dataset.age,
    });
  });

  return resArr;
}

sortList(liList);
getEmployees(liList);
