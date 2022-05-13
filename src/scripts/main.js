'use strict';

const peopleList = document.querySelector('ul');
const people = [...peopleList.children];

function sortList(list) {
  const peopleSalary = salary =>
    salary.dataset.salary.split('$').join('').split(',').join('');

  list.sort((a, b) => {
    return peopleSalary(b) - peopleSalary(a);
  });

  for (const num of list) {
    peopleList.append(num);
  }
}

function getEmployees(list) {
  const arr = list.map(one => ({
    'name': one.outerText,
    'position': one.dataset.position,
    'salary': one.dataset.salary,
    'age': one.dataset.age,
  }));

  return arr;
};

sortList(people);
getEmployees(people);
