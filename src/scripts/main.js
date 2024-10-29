'use strict';

const listOfElements = document.getElementsByTagName('li');
const parentList = document.querySelector('ul');

function sortList(list) {
  const itemsArray = Array.from(list);

  itemsArray.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  parentList.innerHTML = '';

  itemsArray.forEach((item) => {
    parentList.appendChild(item);
  });
}

sortList(listOfElements);

function getEmployees(list) {
  const resultArr = [];

  const itemsArray = Array.from(list);

  itemsArray.forEach((item) => {
    const temp = {
      name: null,
      position: null,
      salary: null,
      age: null,
    };
    const itemContent = item.textContent.trim();

    temp.name = itemContent;
    temp.position = item.dataset.position;
    temp.salary = item.dataset.salary;
    temp.age = item.dataset.age;

    resultArr.push(temp);
  });

  return resultArr;
}

getEmployees(listOfElements);
