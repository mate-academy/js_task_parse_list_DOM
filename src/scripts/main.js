'use strict';

const itemElem = document.getElementsByTagName('li');
const list = [...itemElem].map(item => ({
  name: item.innerText,
  position: item.dataset.position,
  salary: +(item.dataset.salary).replace(/[^0-9]/g, ''),
  age: item.dataset.age,
})).sort((a, b) => b.salary - a.salary);

const sortList = (args) => {
  return args.sort((a, b) => b.salary - a.salary);
};

const sortItemElem = sortList(list);

const getEmployees = (employees) => {
  for (let i = 0; i < employees.length; i++) {
    itemElem[i].innerText = employees[i].name;
    itemElem[i].dataset.position = employees[i].position;

    itemElem[i].dataset.salary = `
    $${employees[i].salary.toLocalString('en-US')}`;
    itemElem[i].dataset.age = employees[i].age;
  }
};

getEmployees(sortItemElem);
