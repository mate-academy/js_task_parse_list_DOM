'use strict';

const list = Array.from(document.querySelector('ul').children);

function sortList(li) {
  li.sort((a, b) => {
    const aValue = a.dataset.salary.replace(/[^0-9]/g, '');
    const bValue = b.dataset.salary.replace(/[^0-9]/g, '');

    return bValue - aValue;
  });

  document.querySelector('ul').append(...li);
}

function getEmployees(li) {
  return li.map((item) => {
    const position = item.dataset.position;
    const salary = item.dataset.salary;
    const age = item.dataset.age;

    return {
      name: item.textContent.trim(),
      position,
      salary,
      age,
    };
  });
}

sortList(list);

getEmployees(list);
