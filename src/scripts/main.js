'use strict';

const ul = document.querySelector('ul');
const li = [...document.querySelectorAll('li')];

const changeToNum = (str) => {
  return Number(str.split('$')[1].replaceAll(',', ''));
};

const sortList = (list) => {
  return list.sort(
    (el1, el2) =>
      changeToNum(el2.dataset.salary) - changeToNum(el1.dataset.salary),
  );
};

const getEmployees = (list) => {
  const result = [];

  list.forEach((element) => {
    result.push({
      name: element.textContent.trim(),
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    });
  });

  return result;
};

ul.append(...sortList(li));

getEmployees(sortList(li));
