'use strict';

function convertToNum(item, key) {
  return +item[key].replace(/\$|,/g, '') || undefined;
}

function getEmployees(list) {
  const resultArray = [];
  const employeeList = [...list];

  employeeList.map((item, index) => {
    resultArray.push({
      ...item.dataset, name: item.innerText,
    });
    resultArray[index].salary = convertToNum(resultArray[index], 'salary');
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

    element.setAttribute('data-position', item.position);
    element.setAttribute('data-salary', item.salary);
    element.setAttribute('data-age', item.age);
    element.textContent = item.name;
    elementToFill.appendChild(element);
  });
}

const employeeArray = getEmployees(document.querySelectorAll('li'));
const employeeSorted = sortList(employeeArray, 'salary');
const listElement = document.querySelector('ul');

fillList(employeeSorted, listElement);
