'use strict';

// write code here
const listOfEmployees = document.querySelectorAll('li');
const holeList = document.querySelector('ul');

const arrayListOfEmployees = [...listOfEmployees];

function convertToNumber(salaryString) {
  return +salaryString.replace('$', '').replace(',', '');
}

function sortList(list) {
  return list.sort(
    (a, b) =>
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary),
  );
}

const sortListNew = sortList(arrayListOfEmployees);

function removeElements() {
  listOfEmployees.forEach((element) => {
    element.remove();
  });
}

function addElements() {
  for (let i = 0; i < sortListNew.length; i++) {
    holeList.appendChild(sortListNew[i]);
  }
}

function getEmployees(list) {
  return list.map((element) => {
    return {
      name: element.textContent.trim(),
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    };
  });
}

removeElements();
addElements();
getEmployees(sortListNew);
