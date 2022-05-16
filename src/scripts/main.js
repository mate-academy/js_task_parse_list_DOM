'use strict';

const list = document.querySelectorAll('li');
const listArr = [...list];

// const listUl = document.getElementsByTagName('ul');

function convertSalaryToNumber(salary) {
  return parseInt(salary.substring(1).split(',').join(''));
}

const sortList = function(arr) {
  const sortedArr = arr.sort((x, y) =>
    convertSalaryToNumber(y.dataset.salary)
    - convertSalaryToNumber(x.dataset.salary));

  //   for (let i = 0; i < sortedArr.length; i++) {
  //     document.getElementById('list').appendChild(sortedArr[i]);
  //   }
  return sortedArr.forEach(element => {
    document.querySelector('ul').appendChild(element);
  });
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

// Cюди треба передати просто список? чи вже відсортований?
// Бо я не знаю як дістати вже відсортований список...
getEmployees(listArr);
