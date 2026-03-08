'use strict';

const ul = document.querySelector('ul');
const parse = (s) => Number(s.replace(/[^\d.-]/g, ''));

sortList(ul);

getEmployees(ul);

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => parse(b.dataset.salary) - parse(a.dataset.salary));
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.querySelectorAll('li')).map((i) => ({
    name: i.textContent.trim(),
    position: i.dataset.position,
    salary: parse(i.dataset.salary),
    age: Number(i.dataset.age),
  }));
}
