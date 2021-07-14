'use strict';

const listOfPeople = document.querySelector('ul');
const listOfEmployees = [...document.querySelectorAll('li')];

const transformSalary = function(person) {
  return +person.dataset.salary.slice(1).split(',').join('');
};

const sortList = function(list) {
  list.sort((person1, person2) => {
    return transformSalary(person2) - transformSalary(person1);
  });

  return listOfPeople.append(...listOfEmployees);
};

const getEmployees = function(list) {
  return list.map(person => (
    {
      name: person.innerText,
      ...person.dataset,
    }
  ));
};

sortList(listOfEmployees);
getEmployees(listOfEmployees);
