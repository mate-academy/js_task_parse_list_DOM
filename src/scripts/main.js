'use strict';

const list = document.querySelector('ul');

const stringToNumber = (string) => {
  return +string.slice(1).replace(',', '.');
};

const createListWithInfo = () => {
  const persons = [...list.children].map(element => {
    const person = {};

    person.name = element.innerText;
    person.position = element.dataset.position;
    person.salary = element.dataset.salary;
    person.age = element.dataset.age;

    return person;
  });

  return persons;
};

const listWithInfo = createListWithInfo();

const sortingListOfPeople = () => {
  listWithInfo.sort((personA, personB) =>
    stringToNumber(personB.salary) - stringToNumber(personA.salary));

  for (let i = 0; i < listWithInfo.length; i++) {
    list.children[i].textContent = listWithInfo[i].name;
  }
};

sortingListOfPeople();
