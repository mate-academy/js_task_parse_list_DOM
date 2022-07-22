'use strict';

const listRef = document.querySelectorAll('li');

function sortSalary(arr) {
  const sortArr = [...arr]
    .sort((personFirst, personSecond) => makeStrInNuber(
      personSecond.dataset.salary) - makeStrInNuber(
      personFirst.dataset.salary));

  return sortArr;
}

function makeStrInNuber(str) {
  return (Number(str.split('')
    .filter(item => Number(item) || Number(item) === 0).join('')));
}

const sortSalarysPeople = sortSalary(listRef);
const listPeoplsRef = document.querySelector('ul');

listPeoplsRef.innerHTML = `
  ${sortSalarysPeople.map(item => `
  <li data-position="${
  item.dataset.position}" data-salary="${
  item.dataset.salary}" data-age="${
  item.dataset.age}">${item.textContent}</li>`).join(' ')}
  `;
