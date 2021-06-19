'use strict';

// write code here
const employees = document.querySelectorAll('ul li');

const strInNumber = (str) => {
  return str.replace(/[^\d]/g, '') * 1;
};

const sortList = (empl) => {
  const sortArr = [...empl].sort(
    (item, item1) => {
      return strInNumber(item1.dataset.salary)
      - strInNumber(item.dataset.salary);
    }).forEach(function(node) {
    empl[0].parentNode.appendChild(node);
  });

  return sortArr;
};

const getEmployees = (arrEmployees) => {
  const res = [];

  [...arrEmployees].map((items) => res.push({
    name: items.textContent.trim(),
    position: items.dataset.position,
    salary: items.dataset.salary,
    age: items.dataset.age,
  }));

  return res;
};

sortList(employees);
getEmployees(employees);
