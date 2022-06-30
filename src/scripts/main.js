'use strict';

const employeesList = [...document.querySelectorAll('li')];

const sortList = function(list) {
  return list.sort((a, b) =>
    Number(b.dataset.salary.replace('$', '').replace(',', '.'))
  - Number(a.dataset.salary.replace('$', '').replace(',', '.')));
};

const sortedList = sortList(employeesList);

const getEmployees = function(item) {
  const obj = {};
  const arr = [];

  item.map(elem => {
    obj.name = elem.innerText;
    obj.position = elem.dataset.position;
    obj.salary = elem.dataset.salary;
    obj.age = elem.dataset.age;

    arr.push({ ...obj });
  });

  return arr;
};

const sortedArr = getEmployees(sortedList);

const result = document.querySelectorAll('li');

for (let i = 0; i < sortedArr.length; i++) {
  result[i].innerText = sortedArr[i].name;
  result[i].dataset.salary = sortedArr[i].salary;
  result[i].dataset.age = sortedArr[i].age;
  result[i].dataset.positin = sortedArr[i].position;
}
