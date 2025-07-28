'use strict';

// write code here
const list = document.querySelector('ul');

function sortList(lis) {
  let items = Array.from(lis.children);

  items = items.sort((a, b) => {
    const s1 = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const s2 = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return s2 - s1;
  });

  items.forEach((el) => lis.appendChild(el));
}

function getEmployees(lists) {
  const items = Array.from(lists.children);
  const arr = [];

  items.forEach((el) => {
    const obj = {};

    obj.name = el.textContent.trim();
    obj.position = el.dataset.position;
    obj.salary = el.dataset.salary;
    obj.age = el.dataset.age;

    arr.push(obj);
  });

  return arr;
}
sortList(list);
getEmployees(list);
