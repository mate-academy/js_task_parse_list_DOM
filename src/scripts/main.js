'use strict';

const listProperties = document.querySelectorAll('li');
const nameList = [...listProperties].map(
  item => item.innerText);
const salaryList = [...listProperties].map(
  item => item.getAttribute('data-salary'));
const ageList = [...listProperties].map(
  item => item.getAttribute('data-age'));
const positionList = [...listProperties].map(
  item => item.getAttribute('data-position'));
const list = [];

for (let i = 0; i < nameList.length; i++) {
  const obj = {};

  obj.name = nameList[i];
  obj.position = positionList[i];
  obj.salary = salaryList[i];
  obj.age = ageList[i];
  list.push(obj);
};

const sortList = () => {
  list.sort(
    (a, b) => +b.salary.replace(/[,$]/g, '') - +a.salary.replace(/[,$]/g, ''));

  for (let i = 0; i < listProperties.length; i++) {
    listProperties[i].innerText = list[i].name;
    listProperties[i].dataset.position = list[i].position;
    listProperties[i].dataset.salary = list[i].salary;
    listProperties[i].dataset.age = list[i].age;
  };
};

const getEmployees = () => {
  return list;
};

sortList();
getEmployees();
