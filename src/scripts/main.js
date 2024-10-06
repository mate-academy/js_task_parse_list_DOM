'use strict';

const persons = document.querySelectorAll('li');
const listPersons = document.querySelector('ul');

function stringToNum(str) {
  const num = str.slice(1).split(',').join('');

  return Number(num);
}

function getEmployees(list) {
  return [...list].sort((a, b) => {
    return stringToNum(b.dataset.salary) - stringToNum(a.dataset.salary);
  });
}

const sortList = getEmployees(persons);

for (let el = 0; el < sortList.length; el++) {
  listPersons.append(sortList[el]);
}
