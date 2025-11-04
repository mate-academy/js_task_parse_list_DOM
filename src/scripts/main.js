'use strict';

const peopleList = document.querySelector('ul');
const arrList = [...peopleList.querySelectorAll('li')];

function sortList(list) {
  function toNumber(item) {
    return Number(item.replace(/[^0-9.-]+/g, ''));
  }

  arrList.sort((a, b) => {
    return toNumber(b.dataset.salary) - toNumber(a.dataset.salary);
  });

  arrList.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const schema = [];

  for (const li of list) {
    const position = li.getAttribute('data-position');
    const salary = li.getAttribute('data-salary');
    const age = li.getAttribute('data-age');

    schema.push({
      name: li.textContent.trim(),
      position,
      salary,
      age,
    });
  }

  return schema;
}

sortList(peopleList);
getEmployees(arrList);
