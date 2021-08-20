'use strict';

const list = document.querySelector('ul');
const listItem = list.querySelectorAll('li');

const sortList = () => {
  const strToNum = (str) => {
    return str.split('$')[1].split(',').join('');
  };
  const sortListItem = [...listItem].sort(
    (a, b) => strToNum(b.dataset.salary) - strToNum(a.dataset.salary)
  );

  return (list.innerHTML = `${sortListItem
    .map((item) => `<li>${item.innerHTML}</li>`)
    .join('')}`);
};

const getEmployees = () => {
  const userArr = [];
  const obj = {};

  [...listItem].map((item) => {
    obj.name = item.innerText;
    obj.position = item.dataset.position;
    obj.salary = item.dataset.salary;
    obj.age = item.dataset.age;
    userArr.push(obj);
  });

  return userArr;
};

sortList();
getEmployees();
