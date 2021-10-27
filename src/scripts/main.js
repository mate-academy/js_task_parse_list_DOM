'use strict';

// write code here
const salary = document.querySelectorAll('li');
const ul = document.querySelector('ul');

function sortList(list) {
  const newLi = [];
  // const newLi = [].slice.call(salary);

  for (const salar of list) {
    newLi.push(salar);
  }

  newLi.sort(function(a, b) {
    return +b.dataset.salary.replace('$', '').replace(',', '')
   - +a.dataset.salary.replace('$', '').replace(',', '');
  });

  for (let i = 0; i < newLi.length; i++) {
    ul.append(newLi[i]);
  };
}

function getEmployees(list) {
  const arr = [];
  const result = [];

  for (const salar of list) {
    arr.push(salar);
  }

  arr.filter(function(item) {
    const info = {};

    info.name = item.textContent.trim();
    info.position = item.dataset.position;
    info.salary = item.dataset.salary;
    info.age = item.dataset.age;
    result.push(info);
  });

  return result;
}

sortList(salary);
getEmployees(salary);
