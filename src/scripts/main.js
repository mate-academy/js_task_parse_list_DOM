'use strict';

const employeesList = document.querySelector('ul');
const listItems = [...employeesList.querySelectorAll('li')];

function sortList(list) {
  return list.sort((item1, item2) => getNumber(item2) - getNumber(item1));
}

function getNumber(item) {
  const parseSalary = item.dataset.salary
    .slice(1)
    .split('')
    .filter((char) => /[0-9]/.test(char))
    .join('');

  return parseInt(parseSalary, 10);
}

const sortedList = sortList(listItems);

sortedList.forEach((li) => employeesList.append(li));

function getEmployees(list) {
  return list.map((item) => ({
    name: item.innerText.trim().split(' ').slice(0, 2).join(' '),
    position: item.dataset.position,
    salary: getNumber(item),
    age: Number(item.dataset.age),
  }));
}

getEmployees(sortedList);
