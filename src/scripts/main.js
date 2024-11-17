'use strict';

const peopleList = document.querySelector('ul');

function sortBySallary(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseFloat(
      a.getAttribute('data-salary').replace(/[\\$,]/g, ''),
    );
    const salaryB = parseFloat(
      b.getAttribute('data-salary').replace(/[\\$,]/g, ''),
    );

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));

  return list;
}

function getEmployees(list) {
  const items = Array.from(list.children);
  const arr = [];

  for (const item of items) {
    const obj = {};

    obj.name = item.innerText;
    obj.position = item.getAttribute('data-position');
    obj.salary = +item.getAttribute('data-salary').replace(/[\\$,]/g, '');
    obj.age = +item.getAttribute('data-age');

    arr.push(obj);
  }

  return arr;
}

sortBySallary(peopleList);
getEmployees(peopleList);
