'use strict';

function sortList(arr) {
  const newArr = [...arr];

  newArr.forEach((item) => {
    const salary = item.dataset.salary.slice(1).split(',').join('');

    item.dataset.salaryNumeric = +salary;
  });

  newArr.sort((a, b) => b.dataset.salaryNumeric - a.dataset.salaryNumeric);

  return newArr;
}

const employers = document.querySelectorAll('li');
const sortEmployers = sortList(employers);
const ul = document.querySelector('ul');

ul.innerHTML = '';

sortEmployers.forEach((li) => {
  delete li.dataset.salaryNumeric;

  ul.appendChild(li);
});

function getEmployees(arr) {
  const listEmployers = [];

  arr.forEach((el) => {
    const object = {
      name: el.innerText,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };

    listEmployers.push(object);
  });

  return listEmployers;
}

getEmployees(employers);
