'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function sortPeople(listPeople, list) {
  const replaceString = (str) => {
    return str.replace(/,/g, '').replace('$', '');
  };

  const peopleSortSalary = [...listPeople].sort((str1, str2) => {
    const num2 = str2.dataset.salary;
    const num1 = str1.dataset.salary;

    return replaceString(num2) - replaceString(num1);
  });

  peopleSortSalary.forEach(people => list.append(people));
}

sortPeople(employees, listOfEmployees);

function createObjFromEmployess(listPeople) {
  for (let i = 0; i < listPeople.length; i++) {
    const infoPeople = listPeople[i];
    const { position, age, salary } = infoPeople.dataset;
    const elementContent = infoPeople.textContent.trim();

    const obj = {
      name: elementContent,
      position,
      age,
      salary,
    };

    return obj;
  }
}

createObjFromEmployess(employees);
