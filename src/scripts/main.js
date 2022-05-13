'use strict';

const list = document.querySelectorAll('li');
const listArr = [...list];

function convertSalaryToNumber(salary) {
  return parseInt(salary.substring(1).split(',').join(''));
}

const sortList = function(arr) {
  return arr.sort((x, y) =>
    convertSalaryToNumber(x.dataset.salary)
    - convertSalaryToNumber(y.dataset.salary));
};

const getEmployees = function(array) {
  return array.map(person => {
    const personObj = {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };

    return personObj;
  });
};

sortList(listArr);
getEmployees(sortList);
