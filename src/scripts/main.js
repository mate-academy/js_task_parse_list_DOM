'use strict';

const list = document.getElementsByTagName('li');
const personList = [];

const normalizedSalary = (rawSalary) => {
  return +rawSalary.slice(1).split(',').join('');
};

const listSort = () => {
  for (const person of list) {
    personList.push({
      name: person.innerText,
      position: person.getAttribute('data-position'),
      salary: normalizedSalary(person.getAttribute('data-salary')),
      age: person.getAttribute('data-age'),
    });
  }

  personList.sort((a, b) => b.salary - a.salary);
};

const getEmployees = () => {
  for (let i = 0; i < list.length; i++) {
    list[i].innerText = personList[i].name;
    list[i].setAttribute('data-position', personList[i].position);
    list[i].setAttribute('data-salary', personList[i].salary);
    list[i].setAttribute('data-age', personList[i].age);
  }
};

listSort();
getEmployees();
