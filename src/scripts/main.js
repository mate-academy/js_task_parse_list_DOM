'use strict';

const peoplesList = document.querySelector('ul');
const listOfPeoples = document.querySelectorAll('li');

function sortList(peopleList) {
  const sortedPeoples = [...peopleList];

  const salary = (toNumber) => {
    return +toNumber.dataset.salary.slice(1).split(',').join('');
  };

  sortedPeoples.sort((current, next) => {
    const currentSalary = salary(current);
    const nextSalary = salary(next);

    return nextSalary - currentSalary;
  });

  peoplesList.append(...sortedPeoples);
};

function getEmployees(peopleList) {
  const arrayOfPeoples = [...peopleList];

  return arrayOfPeoples.map(item => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortList(listOfPeoples);
getEmployees(listOfPeoples);
