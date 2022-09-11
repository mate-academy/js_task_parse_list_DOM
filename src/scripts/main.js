'use strict';

const list = document.querySelector('ul');
const listItems = [...document.querySelectorAll('li')];

function toNumber(str) {
  const replaced = str.replaceAll(',', '');

  const num = replaced.substr(1);

  return num;
}

function sortList(employees) {
  const sorted = employees.sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  list.append(...sorted);
};

function getEmployees(employees) {
  return employees.map(emp =>
    ({
      names: emp.innerText,
      position: emp.dataset.position,
      salary: emp.dataset.salary,
      age: emp.dataset.age,
    })
  );
}

sortList(listItems);
getEmployees(listItems);
