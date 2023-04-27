'use strict';

const listElements = document.querySelectorAll('li');

const namesList = [...listElements].map(item => item.innerText);

const dataAttributesValues = [...listElements].map(item => item.dataset);

const getNumber = (value) => {
  return Number(value.slice(1).split(',').join(''));
};

const listEmployees = dataAttributesValues.map((item, index) => {
  return {
    nameEmployee: namesList[index],
    ...item,
  };
});

function sortList() {
  listEmployees.sort((first, second) =>
    getNumber(second.salary) - getNumber(first.salary));
}

function getEmployees() {
  listElements.forEach((elem, index) => {
    const { position, salary, age, nameEmployee } = listEmployees[index];

    elem.dataset.position = position;
    elem.dataset.salary = salary;
    elem.dataset.age = age;
    elem.innerText = nameEmployee;
  });
}

sortList();
getEmployees();
