'use strict';

const people = [...document.querySelectorAll('li')];
const peopleContainer = document.querySelector('ul');

const convertToNumber = (salary) => {
  return +(salary.substring(1).split(',').join(''));
};

const sortList = (peopleList) => {
  const sortedPeopleList = peopleList.sort((firstPerson, secondPerson) => {
    return convertToNumber(secondPerson.dataset.salary)
      - convertToNumber(firstPerson.dataset.salary);
  });

  peopleContainer.append(...sortedPeopleList);
};

const getEmployees = (peopleList) => {
  return peopleList.map(person => ({
    name: person.innerText,
    ...person.dataset,
  }));
};

sortList(people);
getEmployees(people);
