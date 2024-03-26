'use strict';

const listElements = document.querySelectorAll('li');
const listEmployees = [];

listElements.forEach((elem) => {
  const person = {
    nameEmployee: elem.innerText,
    position: elem.dataset.position,
    salary: elem.dataset.salary,
    age: elem.dataset.age,
  };

  listEmployees.push(person);
});

const getNumber = (value) => {
  return Number(value.slice(1).split(',').join(''));
};

function sortList() {
  listEmployees.sort(
    (first, second) => getNumber(second.salary) - getNumber(first.salary),
  );
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
