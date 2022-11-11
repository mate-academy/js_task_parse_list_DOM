'use strict';

function convertToNum(item, key) {
  return +item.dataset[key].replace(/\$|,/g, '') || undefined;
}

function getEmployees(list) {
  const employeeList = [...list];

  const resultArray = employeeList.map(person => {
    return {
      ...person.dataset,
      name: person.innerText,
      salary: convertToNum(person, 'salary'),
    };
  });

  return resultArray;
}

function sortList(array, key) {
  return array.sort((prev, cur) => cur[key] - prev[key]);
}

function fillList(array, elementToFill) {
  elementToFill.innerHTML = '';

  array.map(item => {
    const element = document.createElement('li');

    element.dataset.position = item.position;
    element.dataset.salary = item.salary;
    element.dataset.age = item.age;
    element.textContent = item.name;
    elementToFill.appendChild(element);
  });
}

const employeeArray = getEmployees(document.querySelectorAll('li'));
const employeeSorted = sortList(employeeArray, 'salary');
const listElement = document.querySelector('ul');

fillList(employeeSorted, listElement);
