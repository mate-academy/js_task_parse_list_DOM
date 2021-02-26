'use strict';

const list = document.querySelector('ul');

const stringToNumber = (string) => {
  return +string.slice(1).replace(',', '.');
};

const people = [...list.children];

const createListWithInfo = (peopleList) => {
  return peopleList.map(element => {
    const person = {};

    person.name = element.innerText;
    person.position = element.dataset.position;
    person.salary = element.dataset.salary;
    person.age = element.dataset.age;
  });
};

const sortingListOfPeople = (peopleList) => {
  return peopleList.sort((personA, personB) =>
    stringToNumber(personB.dataset.salary)
    - stringToNumber(personA.dataset.salary));
};

sortingListOfPeople(people);
createListWithInfo(people);
list.append(...people);
