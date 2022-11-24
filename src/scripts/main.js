'use strict';

const [...peopleArray] = document.querySelectorAll('li');

function sortList(personList) {
  return personList.sort((a, b) => b.salary - a.salary);
}

function getEmployees(people) {
  return people.map(person => {
    return {
      name: person.textContent.replace(/\n/g, '').trim(),
      position: person.dataset.position,
      salary: +person.dataset.salary.slice(1).split(',').join(''),
      age: +person.dataset.age,
    };
  });
}

const sortedList = sortList(getEmployees(peopleArray));

sortedList.forEach((element, index) => {
  peopleArray[index].textContent = element.name;
  peopleArray[index].dataset.salary = element.salary;
});
