'use strict';

const liElements = [...document.querySelectorAll('li')];

const convert = (str) => {
  return parseInt(str.replace(/[^0-9]/g, ''), 10);
};

function getEmployees(list) {
  return list.map((item) => {
    return {
      name: item.textContent,
      position: item.dataset.position,
      salary: convert(item.dataset.salary),
      age: item.dataset.age,
    };
  });
}

const employees = getEmployees(liElements);

function sortList(list) {
  return list.sort((a, b) => {
    return b.salary - a.salary;
  });
}

const sortedList = sortList(employees);

const ul = document.querySelector('ul');

ul.innerHTML = '';

sortedList.map((employee) => {
  const li = document.createElement('li');

  li.setAttribute('data-position', employee.position);
  li.setAttribute('data-salary', `$${employee.salary}`);
  li.setAttribute('data-age', employee.age);
  li.innerHTML = employee.name;

  ul.appendChild(li);
});
