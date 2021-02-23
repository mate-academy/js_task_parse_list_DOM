'use strict';

const employees = document.querySelectorAll('li');

const people = [...employees].map(person => ({
  ...person,
  name: person.innerText,
  position: person.dataset.position,
  salary: person.dataset.salary,
  age: person.dataset.age,
}));

function sortList(humans) {
  return humans.sort((currentPerson, nextPerson) => {
    const currentPersonToNumber
      = +currentPerson.salary.split('').slice(1).join('').split(',').join('');
    const nextPersonToNumber
      = +nextPerson.salary.split('').slice(1).join('').split(',').join('');

    return nextPersonToNumber - currentPersonToNumber;
  });
};

const sortedEmployees = sortList(people);

function getEmployees(list, putFrom) {
  for (let i = 0; i < list.length; i++) {
    list[i].innerText = putFrom[i].name;
    list[i].dataset.position = putFrom[i].position;
    list[i].dataset.salary = putFrom[i].salary;
    list[i].dataset.age = putFrom[i].age;
  };

  return list;
}

sortList(people);
getEmployees(employees, sortedEmployees);
