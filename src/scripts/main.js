'use strict';

const list = document.querySelectorAll('li');

function sortList(parsed) {
  const sortBySal = [...parsed].sort(
    (a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  return sortBySal;
}

function toNumber(string) {
  const number = string.slice(1).split('').filter(el => el !== ',').join('');

  return +number;
}

function getEmployees(sortedList) {
  const result = [];

  for (const item of sortedList) {
    const obj = {
      name: item.outerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    result.push(obj);
  };

  return result;
}

const sorted = sortList(list);
const ul = document.querySelector('ul');

ul.innerHTML = `
${sorted.map(item => `
<li 
  data-position=${item.dataset.position} 
  data-salary=${item.dataset.salary} 
  data-age=${item.dataset.age}>
${item.innerText}</li>
`).join('')}
`;

getEmployees(sorted);
