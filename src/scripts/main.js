/* eslint-disable no-shadow */
'use strict';

const list = [...document.querySelectorAll('li')];

function sortList(list) {
  const salaryList = list
    .map((el) => ({
      element: el,
      salary: parseInt(
        el.getAttribute('data-salary').replace(',', '').replace('$', ''),
      ),
    }))
    .sort((a, b) => b.salary - a.salary);

  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  salaryList.forEach(({ element }) => ul.appendChild(element));
}

function getEmployees(list) {
  return list.map((li) => ({
    name: li.textContent.trim(),
    position: li.getAttribute('data-position'),
    salary: parseInt(
      li.getAttribute('data-salary').replace(',', '').replace('$', ''),
    ),
    age: parseInt(li.getAttribute('data-age')),
  }));
}

sortList(list);
getEmployees(list);
