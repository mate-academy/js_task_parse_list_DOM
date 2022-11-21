'use strict';

function sortList(list) {
  let count;

  do {
    count = 0;

    for (let i = 1; i < list.children.length; i++) {
      const prev = list.children[i - 1];
      const current = list.children[i];

      if (Number(prev.getAttribute('data-salary').split(',').join('')
        .slice(1)) - Number(current.getAttribute('data-salary').split(',')
        .join('').slice(1)) < 0) {
        count++;
        list.insertBefore(list.children[i], list.children[i - 1]);
      }
    }
  } while (count > 0);
}

function getEmployees(list) {
  const employees = [];

  for (const node of list.children) {
    employees.push({
      name: node.innerText,
      position: node.getAttribute('data-position'),
      salary: node.getAttribute('data-salary'),
      age: node.getAttribute('data-age'),
    });
  }

  return employees;
}

sortList(document.querySelector('ul'));
getEmployees(document.querySelector('ul'));
