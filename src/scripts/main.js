'use strict';

const peopleList = document.querySelectorAll('li');

const getPersonSalary = person => {
  return Number(person.dataset.salary.replace(/[$,]/g, ''));
};

function sortList(list) {
  [...list].sort((personA, personB) => {
    const personASalary = getPersonSalary(personA);
    const personBSalary = getPersonSalary(personB);

    if (personASalary > personBSalary) {
      personB.before(personA);
    }

    return personASalary - personBSalary;
  });
}

function getEmployees(list) {
  const employeesList = [...list].map(person => {
    return {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });

  return employeesList;
}

sortList(peopleList);
getEmployees(peopleList);
