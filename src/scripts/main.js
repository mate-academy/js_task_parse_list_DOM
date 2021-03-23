'use strict';

const people = [...document.querySelectorAll('li')];
const peopleContainer = document.querySelector('ul');
const separator = ',';

const convertSalary = (salary) => {
  return +(salary.substring(1).split(separator).join(''));
};

const sortList = (peopleList) => {
  const sortedPeopleList = peopleList.sort((firstPerson, secondPerson) => {
    return convertSalary(secondPerson.dataset.salary)
      - convertSalary(firstPerson.dataset.salary);
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
