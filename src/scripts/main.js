'use strict';

const li = document.querySelectorAll('li');

function sortList(list) {
  const sortedList = Array.from(list).sort((a, b) => {
    const salaryA = +a.getAttribute('data-salary').slice(1).replaceAll(',', '');
    const salaryB = +b.getAttribute('data-salary').slice(1).replaceAll(',', '');

    return salaryB - salaryA;
  });

  return sortedList;
}

function getEmployees(list) {
  const employees = [];

  list.forEach((item) => {
    const employee = {
      name: item.textContent.trim().split(' ')[0],
      position: item.getAttribute('data-position'),
      salary: item.getAttribute('data-salary'),
      age: item.getAttribute('data-age'),
    };

    employees.push(employee);
  });

  return employees;
}

getEmployees(li);

const ul = document.querySelector('ul');
const sortedLi = sortList(li);

ul.innerHTML = '';

sortedLi.forEach((item) => {
  const addLi = document.createElement('li');

  addLi.textContent = `${item.textContent.trim().split(',')}`;
  ul.appendChild(addLi);
});
