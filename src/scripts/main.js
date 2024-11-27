/* eslint-disable max-len */
'use strict';

function sortList(list) {
  const sortedList = Array.from(list).sort((li1, li2) => {
    const salary1 = Number(li1.dataset.salary.split(/\$|,/).join(''));
    const salary2 = Number(li2.dataset.salary.split(/\$|,/).join(''));

    return salary2 - salary1;
  });

  return sortedList;
}

function getEmployees(list) {
  const employees = [];

  Array.from(list).forEach((li) => {
    const employee = {
      name: li.innerText,
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    };

    employees.push(employee);
  });

  return employees;
}

const listOfLi = document.querySelectorAll('ul > li');
const sortedListOfLi = sortList(listOfLi);
const ul = document.querySelector('ul');

ul.innerHTML = '';

sortedListOfLi.forEach((item) => {
  ul.append(item);
});

getEmployees(listOfLi);
