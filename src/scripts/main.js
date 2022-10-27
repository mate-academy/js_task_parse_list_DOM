'use strict';

const list = document.querySelectorAll('li');

const listOfEmployees = [...list].map(person => ({
  name: person.innerText,
  position: person.dataset.position,
  salary: Number(person.dataset.salary.replace(/[, $]/g, '')),
  age: Number(person.dataset.age),
}));

const sortList = (listToSort) => {
  return listToSort.sort((a, b) => b.salary - a.salary);
};

const sortListOfEmployees = sortList(listOfEmployees);

const getEmployees = (listToFollow) => {
  for (let i = 0; i < listToFollow.length; i++) {
    list[i].innerText = listToFollow[i].name;
    list[i].dataset.position = listToFollow[i].position;

    list[i].dataset.salary
      = `$${listToFollow[i].salary.toLocaleString('en-US')}`;
    list[i].dataset.age = sortListOfEmployees[i].age;
  };
};

getEmployees(sortListOfEmployees);
