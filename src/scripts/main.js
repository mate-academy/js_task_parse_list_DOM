'use strict';

function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => {
    return (
      Number(b.getAttribute('data-salary').replace(',', '').replace('$', '')) -
      Number(a.getAttribute('data-salary').replace(',', '').replace('$', ''))
    );
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const items = [...list.children];
  const arr = [];

  for (const li of items) {
    arr.push({
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    });
  }

  return arr;
}

sortList(document.querySelector('ul'));
getEmployees(document.querySelector('ul'));
