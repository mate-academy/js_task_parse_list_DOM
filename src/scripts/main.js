'use strict';

const employeesNodeList = document.querySelectorAll('body > ul > li');
const convertToObjects = (nodeList) => Array.from(nodeList).map(el => {
  return {
    name: el.textContent.trim(),
    salary: el.getAttribute('data-salary'),
    age: el.getAttribute('data-age'),
    position: el.getAttribute('data-position'),
  };
});
const sortArrBySalary = (arr) => {
  const StrToNumber = (str) => Number(str.slice(1).replaceAll(',', ''));

  return arr.sort((a, b) => StrToNumber(b.salary) - StrToNumber(a.salary));
};
const convertedArr = convertToObjects(employeesNodeList);
const sortedArr = sortArrBySalary(convertedArr);
const changeLiToSorted = (arr, nodeList) => {
  Array.from(nodeList).forEach((item, i) => {
    item.textContent = arr[i].name;
    item.setAttribute('data-age', arr[i].age);
    item.setAttribute('data-salary', arr[i].salary);
    item.setAttribute('data-position', arr[i].position);
  });
};

changeLiToSorted(sortedArr, employeesNodeList);
