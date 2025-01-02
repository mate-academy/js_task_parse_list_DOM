'use strict';

const employees = document.querySelector('ul');

function sortList(list) {
  const sortedPeopleList = [...list.children]
    .sort((previousPerson, currentPerson) =>
      toNumber(currentPerson.dataset.salary)
      - toNumber(previousPerson.dataset.salary)
    );

  return list.append(...sortedPeopleList);
};

const toNumber = string => Number(string.replace(/[$,]/g, ''));

function getEmployees(list) {
  return [...list.children].map(person =>
    ({
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    })
  );
}

sortList(employees);
getEmployees(employees);
