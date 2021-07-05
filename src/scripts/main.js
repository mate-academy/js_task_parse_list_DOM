'use strict';

const list = [...document.querySelectorAll('li')];

sortList(list);
getEmployees(list);

function sortList(param) {
  let listCopy = param;

  listCopy = listCopy.sort((a, b) => {
    const paramA = parseNum(a.getAttribute('data-salary'));
    const paramB = parseNum(b.getAttribute('data-salary'));

    return paramB - paramA;
  });

  document.body.children[1].remove();

  const newData = document.createElement('ul');

  for (let i = 0; i < listCopy.length; i++) {
    newData.append(listCopy[i]);
    document.body.append(newData);
  };
};

function parseNum(par) {
  let result = '';

  for (const char of par) {
    if (
      '1234567890'.includes(char)) {
      result += char;
    }

    if (
      ','.includes(char)) {
      result += '.';
    };
  };

  return +result;
};

function getEmployees(param) {
  const result = [];

  for (let i = 0; i < param.length; i++) {
    const person = {};

    person.name = param[i].innerText;
    person.position = param[i].dataset.position;
    person.salary = param[i].dataset.salary;
    person.age = param[i].dataset.age;
    result.push(person);
  };

  return result;
};
