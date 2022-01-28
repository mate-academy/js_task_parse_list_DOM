'use strict';

const ulList = document.querySelector('ul');
const list = document.querySelectorAll('li');

function sortList(data) {
  const listArr = [...data];

  listArr.sort((a, b) => {
    const firstNum = toNumber(a.dataset.salary);
    const secondNum = toNumber(b.dataset.salary);

    return secondNum - firstNum;
  });

  return listArr.map(person => ulList.append(person));
};

function toNumber(num) {
  return +num.split(',').join('').split('$').join('');
};

function getEmployees([...employeesList]) {
  return employeesList.map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
};

sortList(list);
getEmployees(list);
