'use strict';

const arElements = document.querySelector('ul');
const query = document.querySelectorAll('li');
const list = [...query];

const strToDigitArr = function(string_) {
  const arrString = string_.split('');
  const arrDigit = arrString.filter(letter => /^[0-9]$/.test(letter));
  const resultNumber = Number(arrDigit.join(''));

  return resultNumber;
};

const sortList = function(listForSort) {
  const sortedArr = listForSort.sort(
    (x, y) => strToDigitArr(
      y.getAttribute('data-salary')
    ) - strToDigitArr(
      x.getAttribute('data-salary')
    )
  );

  arElements.append(...sortedArr);
};

const getEmployees = function(initialList) {
  let employeesObjegts = {};
  const employeesList = [];

  for (const attrib of initialList) {
    employeesObjegts['name'] = attrib.innerText;
    employeesObjegts['position'] = attrib.getAttribute('data-position');
    employeesObjegts['salary'] = attrib.getAttribute('data-salary');
    employeesObjegts['age'] = attrib.getAttribute('data-age');
    employeesList.push(employeesObjegts);
    employeesObjegts = {};
  }

  return employeesList;
};

sortList(list);
getEmployees(list);
