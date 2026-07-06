'use strict';

const list = document.querySelector('ul');
const sortList = function (l) {
  const children = [...l.children];

  children.sort((a, b) => {
    const salaryA = +a.dataset.salary.replace(/[^0-9]/g, '');
    const salaryB = +b.dataset.salary.replace(/[^0-9]/g, '');

    return salaryB - salaryA;
  });

  children.forEach((item) => list.appendChild(item));
};
const getEmployees = function (l) {
  const children = [...l.children];
  const res = [];
  const obj = {
    name: 0,
    position: 0,
    salary: 0,
    age: 0,
  };

  for (const item of children) {
    obj.name = item.textContent.trim();
    obj.position = item.dataset.position;
    obj.salary = item.dataset.salary;
    obj.age = item.dataset.age;

    res.push(obj);
  }

  return res;
};

getEmployees(list);
sortList(list);
