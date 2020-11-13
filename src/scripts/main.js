'use strict';

const list = document.querySelector('ul');
const typeCastFunc = (item) => {
  const element = item.replace(/\$/g, '');
  const num = parseInt(element.replace(/,/g, ''));

  return num;
};

const sortList = function(callback, ulList) {
  const [...array] = ulList.children;

  array.sort((a, b) => {
    const operand1 = callback(a.dataset.salary);
    const operand2 = callback(b.dataset.salary);

    return operand2 - operand1;
  });

  array.forEach(element => ulList.append(element));

  return array;
};

class Employee {
  constructor(name, position, salary, age) {
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
};

const getEmployees = function(EmployeeClass, ulList) {
  const newArray = [];
  const [...array] = ulList.children;

  array.forEach(item => {
    const obj = new EmployeeClass(
      item.innerText,
      item.dataset.position,
      item.dataset.salary,
      item.dataset.age);

    newArray.push(obj);
  });

  return newArray;
};

sortList(typeCastFunc, list);
getEmployees(Employee, list);
