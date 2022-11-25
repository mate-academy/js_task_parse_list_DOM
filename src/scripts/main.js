'use strict';

const employeesNodeList = document.querySelectorAll('body > ul > li');
const ulNode = document.querySelector('body > ul');
const convertToObjects = (nodeList) => {
  const arrOfEmployees = [];

  for (const employee of Array.from(nodeList)) {
    arrOfEmployees.push({
      name: employee.textContent.trim(),
      salary: employee.getAttribute('data-salary'),
      age: employee.getAttribute('data-age'),
      position: employee.getAttribute('data-position'),
    });
  }

  return arrOfEmployees;
};
const sortArrBySalary = (arr) => {
  const convertStrToNumber = (str) => Number(str.replaceAll(',', '')
    .replaceAll('$', ''));

  return arr.sort((a, b) =>
    convertStrToNumber(b.salary) - convertStrToNumber(a.salary));
};
const convertedArr = convertToObjects(employeesNodeList);
const sortedArr = sortArrBySalary(convertedArr);
const changeLiToSorted = (arr) => {
  for (const element of employeesNodeList) {
    element.remove();
  }

  for (const employee of arr) {
    const liNode = document.createElement('li');

    liNode.textContent = employee.name;
    ulNode.append(liNode);
  }
};

changeLiToSorted(sortedArr);
