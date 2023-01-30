'use strict';

const listOfEmloyees = document.querySelector('ul');

const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  const listToNumber = salary => +salary.slice(1).split(',').join('');

  const sortedList = list.sort((a, b) =>
    listToNumber(b.dataset.salary) - listToNumber(a.dataset.salary)
  );

  listOfEmloyees.append(...sortedList);
}

function getEmloyees(list) {
  return list.map(emloyee => {
    return {
      name: emloyee.innerText,
      position: emloyee.dataset.position,
      salary: emloyee.dataset.salary,
      age: emloyee.dataset.age,
    };
  });
}

sortList(employees);
getEmloyees(employees);
