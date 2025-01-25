'use strict';

const listElement = document.querySelector('ul');

function sortList(list) {
  const listOfObj = [];

  for (let i = 0; i < list.children.length; i++) {
    const value = list.children[i].attributes['data-salary'].value.replace(
      /,/g,
      '.',
    );

    listOfObj.push({
      salary: Number(value.substring(1)),
      el: list.children[i],
    });
  }

  const sortedList = listOfObj.sort((a, b) => b.salary - a.salary);

  for (const key of sortedList) {
    list.append(key.el);
  }

  return sortedList;
}

function getEmployees(list) {
  const employees = [];

  for (let i = 0; i < list.children.length; i++) {
    const item = list.children[i];

    employees.push({
      name: item.getAttribute('data-name'),
      position: item.getAttribute('data-position'),
      salary: item.getAttribute('data-salary'),
      age: Number(item.getAttribute('data-age')),
    });
  }

  return employees;
}
sortList(listElement);

getEmployees(listElement);
