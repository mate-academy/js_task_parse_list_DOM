'use strict';

// write code here
const list = document.body.querySelectorAll('li');

function convertToNumber(s) {
  const temp = s.replace('$', '').replace(/,/g, '');

  return parseInt(temp, 10);
};

function getEmployees(list1) {
  return [...list1].map(e => ({
    name: e.innerText,
    position: e.dataset.position,
    salary: e.dataset.salary,
    age: e.dataset.age,
  }));
};

function sortList(items) {
  const result = [...items].sort(
    (e1, e2) => (
      convertToNumber(e2.dataset.salary)
            - convertToNumber(e1.dataset.salary)
    )
  );

  document.body.querySelector('ul').append(...result);
}

getEmployees(list);
sortList(list);
