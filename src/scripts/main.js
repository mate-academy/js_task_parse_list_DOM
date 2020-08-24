'use strict';

// write code here

const list = document.querySelector('ul').children;
// document.querySelectorAll('li');

const sortList = (listOfEmployers) => {
  const sortedListBySalaries = [...listOfEmployers].sort((a, b) => {
    const firstSalary = +a.dataset.salary
      .split('$')[1]
      .split(',')
      .join('.');
    const secondSalary = +b.dataset.salary
      .split('$')[1]
      .split(',')
      .join('.');

    return secondSalary - firstSalary;
  });

  sortedListBySalaries.forEach(person => {
    return document.querySelector('ul').append(person);
  });
};

const getEmployees = listOfEmployers => {
  const employers = [];

  for (const person of listOfEmployers) {
    const employer = {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };

    employers.push(employer);
  }

  return employers;
};

sortList(list);
getEmployees(list);
