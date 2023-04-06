'use strict';

const peopleList = document.querySelectorAll('li');
const ul = document.querySelector('ul');

function sort(list) {
  const listArr = [...list];

  function toNumber(string) {
    return +(string.dataset.salary.replace(/,/g, '')).replace('$', '');
  }

  listArr.sort((x, y) => toNumber(y) - toNumber(x));

  ul.prepend(...listArr);
};

sort(peopleList);

function getEmployees(list) {
  const listArr = [...list];

  const getEmployeesArr = listArr.map(person => ({
    name: person.innerText, ...person.dataset,
  }));

  return getEmployeesArr;
}

getEmployees(peopleList);
