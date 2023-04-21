'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function sortPeople(listPeople, list) {
  const replaceString = (str) => {
    return str.replace(/[,|$]/g, '');
  };

  const peopleSortSalary = [...listPeople].sort((prevStr, nextStr) => {
    const nextNum = nextStr.dataset.salary;
    const prevNum = prevStr.dataset.salary;

    return replaceString(nextNum) - replaceString(prevNum);
  });

  peopleSortSalary.forEach(people => list.append(people));
}

sortPeople(employees, listOfEmployees);

function createObjFromEmployess(listPeople) {
  for (let i = 0; i < listPeople.length; i++) {
    const infoPeople = listPeople[i];
    const { position, age, salary } = infoPeople.dataset;
    const elementContent = infoPeople.textContent.trim();

    const descriptionOfPeople = {
      name: elementContent,
      position,
      age,
      salary,
    };

    return descriptionOfPeople;
  }
}

createObjFromEmployess(employees);
