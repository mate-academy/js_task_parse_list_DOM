'use strict';

const list = document.querySelector('ul');
const listItems = [...list.querySelectorAll('li')];

const convertToNumber = numnber =>
  parseInt(numnber.split('').filter(element => !isNaN(element)).join(''));

const sortList = listOfSort => {
  const sorledList = listOfSort.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));

  for (const person of sorledList) {
    list.append(person);
  }
};

const getEmployees = listOfEmployees => {
  const arrayOfEmployees = [];

  for (const employee of listOfEmployees) {
    const objectOfEmployee = {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };

    arrayOfEmployees.push(objectOfEmployee);
  }

  return arrayOfEmployees;
};

sortList(listItems);
getEmployees(listItems);
