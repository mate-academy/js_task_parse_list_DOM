'use strict';

const list = document.querySelectorAll('li');
const listArr = [...list];

function convertSalaryToNumber(salary) {
  return parseInt(salary.substring(1).split(',').join(''));
}

const sortList = function(arrList) {
  const sortedArr = arrList.sort((x, y) =>
    convertSalaryToNumber(y.dataset.salary)
    - convertSalaryToNumber(x.dataset.salary));

  return sortedArr.forEach(element => {
    document.querySelector('ul').appendChild(element);
  });
};

const getEmployees = function(arrList) {
  return arrList.map(person => {
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

getEmployees(listArr);
