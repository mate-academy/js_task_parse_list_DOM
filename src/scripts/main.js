/* eslint-disable max-len */
'use strict';

const list = document.querySelector('ul');
const allEmployees = [...list.querySelectorAll('li')];

const helperFn = {
  convertToNumber(number) {
    return +number.replace('$', '').replace(',', '.');
  },
  sort(prev, next) {
    return helperFn.convertToNumber(next.dataset.salary) - helperFn.convertToNumber(prev.dataset.salary);
  },
};

const sortList = (ulNode) => allEmployees.sort(helperFn.sort).forEach(item => ulNode.append(item));

const getEmployees = (nodeList) =>
  [...nodeList].map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salart: employee.dataset.salary,
    age: employee.dataset.age,
  }));

sortList(list);
getEmployees(allEmployees);
