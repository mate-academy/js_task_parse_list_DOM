'use strict';

const names = document.querySelectorAll('li');

function sortList(personList) {
  return personList.sort((a, b) => b.salary - a.salary);
}

function getEmployees(people) {
  return [...people].map(person => {
    return {
      name: person.textContent.replace(/\n/g, '').trim(),
      position: person.dataset.position,
      salary: +person.dataset.salary.slice(1).split(',').join(''),
      age: +person.dataset.age,
    };
  });
}

sortList(getEmployees(names));

sortList(getEmployees(names)).forEach((element, index) => {
  names[index].textContent = element.name;
  names[index].dataset.salary = element.salary;
});
