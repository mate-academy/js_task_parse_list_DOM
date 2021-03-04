'use strict';

const liElement = document.querySelectorAll('li');
const ulElement = document.querySelector('ul');

function creatingNumbers(value) {
  return +value.slice(1).replace(',', '');
}

function sotList(incomingList) {
  return incomingList.sort((firstEmployer, secondEmployer) => {
    return creatingNumbers(secondEmployer.dataset.salary) - creatingNumbers(
      firstEmployer.dataset.salary);
  });
}

const liElementArray = [...liElement];
const liSorted = sotList(liElementArray);

ulElement.append(...liSorted);

function employeList(incomingArray) {
  return incomingArray.map((employer) => {
    return {
      ...employer.dataset,
      name: employer.innerTeemployert,
    };
  });
}

employeList(liSorted);
