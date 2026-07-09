'use strict';

const list = Array.from(document.querySelector('ul').children);

function parseSalary(value) {
  return value.replace(/[^0-9]/g, '');
}

function sortList(li) {
  li.sort((a, b) => {
    const aValue = parseSalary(a.dataset.salary);
    const bValue = parseSalary(b.dataset.salary);

    return bValue - aValue;
  });

  document.querySelector('ul').append(...li);
}

function getEmployees(li) {
  return li.map((item) => {
    const position = item.dataset.position;
    const salary = parseSalary(item.dataset.salary);
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
