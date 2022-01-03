'use strict';

// write code here
function convert(str) {
  let num = '';

  for (const ch of str) {
    if (isFinite(ch)) {
      num += ch;
    }
  }

  return +num;
}

function sortList(list) {
  const arr = [...list];

  arr.sort((a, b) => {
    return convert(b.dataset.salary) - convert(a.dataset.salary);
  });

  list[0].after(...arr);
}

function getEmployees(list) {
  const obj = {};

  for (const li of list) {
    obj.name = li.textContent.trim();
    obj.position = li.dataset.position;
    obj.salary = li.dataset.salary;
    obj.age = li.dataset.age;
  }

  return obj;
}

const listLi = document.querySelectorAll('li');

sortList(listLi);
getEmployees(listLi);
