'use strict';

const employees = document.querySelectorAll('li');

function getNumberFromString(value) {
  const result = Number(
    value.dataset.salary.replace(/,/g, '').replace('$', '')
  );

  return result;
}

function sortList(el, nextEl) {
  const a = getNumberFromString(el);
  const b = getNumberFromString(nextEl);

  return b - a;
}

const list = document.querySelector('ul');

function getNewList(el) {
  list.querySelector('li').remove();

  const item = document.createElement('li');

  item.innerHTML = `
  <li
  data-position="${el.dataset.position}"
  data-salary="${el.dataset.salary}"
  data-age="${el.dataset.age}"
  >
  ${el.innerText}
  </li>
`;

  list.append(item);
}

const employeesSort = [...employees].sort(sortList);

employeesSort.map(getNewList);

function getEmployees(prev, item) {
  prev.name = item.innerText.trim();
  prev.position = item.dataset.position;
  prev.salary = item.dataset.salary;
  prev.age = item.dataset.age;

  return prev;
}

employeesSort.reduce(getEmployees, {});

// console.log(employeesSort.reduce(getEmployees, {}));
