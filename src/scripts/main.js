'use strict';

const list = document.querySelector('ul');
const listOfPeople = document.querySelectorAll('li');

function sortList(peopleList) {
  const listToArray = [...peopleList];
  const salary = (toNumber) => {
    return +toNumber.dataset.salary.slice(1).split(',').join('');
  };

  listToArray.sort((current, next) => {
    const currentSalary = salary(current);
    const nextSalary = salary(next);

    return nextSalary - currentSalary;
  });

  list.append(...listToArray);
};

function getEmployees(peopleList) {
  const listToArray = [...peopleList];

  return listToArray.map(item => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortList(listOfPeople);
getEmployees(listOfPeople);
